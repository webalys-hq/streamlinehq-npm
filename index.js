import { fileURLToPath } from "url";
import { dirname } from "path";
import { readFile, writeFile, mkdir } from "fs/promises";
// import https from "https";
import http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function fetchFamilies(secret, families) {
  const fetchFamilyPromises = families.map((family) =>
    new Promise((resolve, reject) => {
      // https
      http
        .get(
          // TODO: change for the real endpoint when it is ready
          // `https://api.staging.streamlineicons.com/v3/icons/${family}`,
          `http://localhost:8080/v3/icons/${family}`,
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
              resolve(JSON.parse(data))
            })
          }
        )
        .on('error', (err) => {
          console.log('Error: ' + err.message)
          reject(err)
        })
    }))

  return Promise.all(fetchFamilyPromises)
}

async function installStreamlineAssets() {
  try {
    const streamlineConfiguration = JSON.parse(
      await readFile(
        new URL(__dirname + "/../streamlinehq.json", import.meta.url)
      )
    );
    console.log(streamlineConfiguration);
    if (
      !streamlineConfiguration.families ||
      !streamlineConfiguration.families.length
    ) {
      throw new Error(
        "families key must be present and must be filled with names of families, like streamline-regular"
      );
    }
    if (!streamlineConfiguration.secret) {
      throw new Error(
        "secret key must be present and filled with your private streamline secret token"
      );
    }

    const fetchedFamiliesResponses = await fetchFamilies(streamlineConfiguration.secret, streamlineConfiguration.families);

    fetchedFamiliesResponses.forEach((familyResponse) => {
      familyResponse.data.forEach(async (icon) => {
        const folderPath = `${__dirname}/images/${icon.family.slug}`
        await mkdir(folderPath, {recursive: true})
        await writeFile(`${folderPath}/${icon.slug}.svg`, icon.svg)
      })
    })

    console.debug("Finished installation");
  } catch (e) {
    console.log(e.name);
    if (e.code === "ENOENT") {
      console.error(".streamlinehq.json file must be present in parent folder");
    } else if (e.name === "SyntaxError") {
      console.error(".streamlinehq.json file must be proper JSON");
    } else {
      console.error(e);
    }
    process.exitCode = 1;
  }
}

console.debug("Running installation script");
installStreamlineAssets();
