import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import querystring from 'querystring'
// For local dev
// import http from 'http'
import https from 'https'
import { config } from 'dotenv'

const projectFolderPath = `${__dirname}/../../../..`
// For local dev
// const projectFolderPath = `${__dirname}/..`

config({ path: `${projectFolderPath}/.env` })

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
    const skipOptimize = process.env.STREAMLINE_OPTIMIZE_IMAGES === 'false'

    https
      // For local dev
      // http
      .get(
        // For local dev
        // `http://localhost:8080/v3/npm/assets/${secret}?${querystring.encode(
        `https://api.streamlineicons.com/v3/npm/assets/${secret}?${querystring.encode(
          {
            families,
            categories: true,
            // true by default
            optimize: !skipOptimize,
          },
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
              // console.log(data)
              resolve({
                ...JSON.parse(data),
                statusCode: resp.statusCode,
              })
            } catch (e) {
              console.error('Error parsing JSON from request')
            }
          })
        },
      )
      .on('error', (err) => {
        console.error('API error: ' + err.message)
        reject(err)
      })
  })
}

export async function installStreamlineAssets() {
  try {
    let envValid = true
    let streamlineConfiguration: { families: string[]; secret: string } = {
      families: null,
      secret: null,
    }

    // Try getting variables from env first
    try {
      streamlineConfiguration = {
        families: JSON.parse(process.env.STREAMLINE_FAMILIES),
        secret: process.env.STREAMLINE_SECRET,
      }
    } catch (e) {
      if (e.name === 'SyntaxError') {
        console.error(
          'Error while reading env vars: STREAMLINE_FAMILIES env var must be proper JSON',
        )
        envValid = false
      } else {
        console.error(e)
      }
    }

    // If env does not have all variables or it's invalid -- check the config file.
    // @deprecated
    if (
      !envValid ||
      !streamlineConfiguration.families ||
      !streamlineConfiguration.secret
    ) {
      console.debug('Reading streamlinehq.json config file')
      const url = `${projectFolderPath}/streamlinehq.json`
      const file = await readFileSync(url).toString()
      const fileConfiguration = JSON.parse(file)

      // Overwrite only those with values from .streamlinehq.json which aren't set in env
      if (!streamlineConfiguration.families) {
        streamlineConfiguration.families = fileConfiguration.families
      }
      if (!streamlineConfiguration.secret) {
        streamlineConfiguration.secret = fileConfiguration.secret
      }
    }

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

    console.debug(
      `Installing Streamline assets for ${streamlineConfiguration.families.join(
        ', ',
      )} families`,
    )

    const getSVGsResponse = await getSVGs(
      streamlineConfiguration.secret,
      streamlineConfiguration.families,
    )

    if (getSVGsResponse.success) {
      await Promise.all(
        Object.keys(getSVGsResponse.data).map(async (familySlug) => {
          const family = getSVGsResponse.data[familySlug]
          return Object.keys(family).map(async (imageImportKey) => {
            const svg = family[imageImportKey]

            const [
              categorySlug,
              subcategorySlug,
              iconSlug,
            ] = imageImportKey.split('/')
            if (svg) {
              const folderPath = `${__dirname}/../img/${familySlug}/${categorySlug}/${subcategorySlug}`
              await mkdirSync(folderPath, { recursive: true })
              return writeFileSync(`${folderPath}/${iconSlug}.svg`, svg)
            } else {
              console.error(
                `No SVG data is present for icon ${imageImportKey} of family ${familySlug}, please report this issue to the Streamline team.`,
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
      console.error(
        'STREAMLINE_FAMILIES and STREAMLINE_SECRET must be set in your env or .streamlinehq.json file must be present in parent folder',
      )
    } else if (e.name === 'SyntaxError') {
      console.error(
        'STREAMLINE_FAMILIES and STREAMLINE_SECRET must be set in your env or .streamlinehq.json file must be proper JSON',
      )
    } else {
      console.error(e)
    }
    process.exitCode = 1
  }
}

installStreamlineAssets()
