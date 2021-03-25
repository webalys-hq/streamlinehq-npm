import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import querystring from 'querystring'
import https from 'https'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export interface StreamlineResponse {
  success: boolean
  data?: {
    [familySlug: string]: { [iconName: string]: string }
  }
  error?: string
  statusCode: number
}

async function getSVGs(
  secret: string,
  families: string[],
): Promise<StreamlineResponse> {
  return new Promise((resolve, reject) => {
    https
      .get(
        `https://api.streamlineicons.com/v3/npm/assets/${secret}?${querystring.encode(
          { families },
        )}`,
        {
          headers: { 'Content-Type': 'application/json' },
        },
        (resp) => {
          let data = ''

          resp.on('data', (chunk) => {
            data += chunk
          })

          resp.on('end', () => {
            try {
              resolve({
                ...JSON.parse(data),
                statusCode: resp.statusCode,
              })
            } catch (e) {
              console.log('Error parsing JSON')
            }
          })
        },
      )
      .on('error', (err) => {
        console.log('Error: ' + err.message)
        reject(err)
      })
  })
}

export async function installStreamlineAssets() {
  try {
    const url = `${__dirname}/../../../../streamlinehq.json`
    const file = await readFileSync(url).toString()
    const streamlineConfiguration = JSON.parse(file)
    console.debug(
      `Installing Streamline assets for ${streamlineConfiguration.families.join(
        ', ',
      )} families based on configuration file ${url}...`,
    )
    if (
      !streamlineConfiguration.families ||
      !streamlineConfiguration.families.length
    ) {
      throw new Error(
        'families key must be present and must be filled with names of families, like streamline-regular',
      )
    }
    if (!streamlineConfiguration.secret) {
      throw new Error(
        'secret key must be present and filled with your private streamline secret token',
      )
    }

    const getSVGsResponse = await getSVGs(
      streamlineConfiguration.secret,
      streamlineConfiguration.families,
    )

    if (getSVGsResponse.success) {
      await Promise.all(
        Object.keys(getSVGsResponse.data).map(async (familySlug) => {
          const family = getSVGsResponse.data[familySlug]
          return Object.keys(family).map(async (iconSlug) => {
            const svg = family[iconSlug]

            if (svg) {
              const folderPath = `${__dirname}/../images/${familySlug}`
              await mkdirSync(folderPath, { recursive: true })
              return writeFileSync(`${folderPath}/${iconSlug}.svg`, svg)
            } else {
              console.error(
                `No SVG data is present for icon ${iconSlug} of family ${familySlug}, please report this issue to the Streamline team.`,
              )
            }
          })
        }),
      )
    } else {
      let errorMessage = `Got error "${getSVGsResponse.error}"`
      if (getSVGsResponse.statusCode === 401) {
        errorMessage += ` Error code is 401 which means it's most likely related to the auth token which was provided. Please double check its value by following the instructions in the project's README file.`
      }
      throw new Error(errorMessage)
    }

    console.debug('Finished installing Streamline assets.')
  } catch (e) {
    console.log(e.name)
    if (e.code === 'ENOENT') {
      console.error('.streamlinehq.json file must be present in parent folder')
    } else if (e.name === 'SyntaxError') {
      console.error('.streamlinehq.json file must be proper JSON')
    } else {
      console.error(e)
    }
    process.exitCode = 1
  }
}

installStreamlineAssets()
