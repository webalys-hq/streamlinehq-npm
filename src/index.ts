import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
// import https from "https";
import http from 'http'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export interface StreamlineResponse {
  success: boolean
  data?: {
    svg: string
    slug: string
    family: {
      slug: string
    }
  }[]
  error?: string
  statusCode: number
  familyName: string
}

async function fetchFamilies(secret: string, families: string[]) {
  const fetchFamilyPromises = families.map<Promise<StreamlineResponse>>(
    (family) =>
      new Promise((resolve, reject) => {
        // https
        http
          .get(
            // TODO: change for the real endpoint when package is ready
            // `https://api.staging.streamlineicons.com/v3/icons/${family}`,
            `http://localhost:8080/v3/icons/${family}?withSVG=true`,
            {
              headers: {
                Authorization: `Bearer ${secret}`,
              },
            },
            (resp) => {
              let data = ''

              // A chunk of data has been received.
              resp.on('data', (chunk) => {
                data += chunk
              })

              // The whole response has been received. Print out the result.
              resp.on('end', () => {
                resolve({
                  ...JSON.parse(data),
                  familyName: family,
                  statusCode: resp.statusCode,
                })
              })
            },
          )
          .on('error', (err) => {
            console.log('Error: ' + err.message)
            reject(err)
          })
      }),
  )

  return Promise.all(fetchFamilyPromises)
}

export async function installStreamlineAssets() {
  try {
    // const url = new URL(__dirname + '/../streamlinehq.json', import.meta.url)
    const url = `${__dirname}/../../streamlinehq.json`
    const file = await readFileSync(url).toString()
    const streamlineConfiguration = JSON.parse(file)
    console.log(streamlineConfiguration)
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

    const fetchedFamiliesResponses = await fetchFamilies(
      streamlineConfiguration.secret,
      streamlineConfiguration.families,
    )

    fetchedFamiliesResponses.forEach((familyResponse) => {
      if (familyResponse.success) {
        familyResponse.data.forEach(async (icon) => {
          if (!icon.svg) {
            throw new Error(
              `No SVG data is present, please report an issue to Streamline team about icon ${icon.slug} of family ${icon.family.slug}`,
            )
          }
          const folderPath = `${__dirname}/../images/${icon.family.slug}`
          await mkdirSync(folderPath, { recursive: true })
          await writeFileSync(`${folderPath}/${icon.slug}.svg`, icon.svg)
        })
      } else {
        let errorMessage = `Got error "${familyResponse.error}" for family ${familyResponse.familyName}.`
        if (familyResponse.statusCode === 401) {
          errorMessage += ` Error code is 401 which means it's most likely related to the auth token which was provided. Please double check its value by following the instructions in the project's README file.`
        }
        throw new Error(errorMessage)
      }
    })

    console.debug('Finished installation')
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

console.debug('Running installation script')
installStreamlineAssets()
