import { fileURLToPath } from "url";
import { dirname } from "path";
import { readFile } from "fs/promises";
import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function fetchFamilies(secret) {
  return new Promise((resolve, reject) =>
    https
      .get(
        // TODO: change for the real endpoint when it is ready
        "https://api.staging.streamlineicons.com/v2/icons/streamline-regular/interface-essential/home/house",
        {
          headers: {
            Authorization: ` Bearer ${secret}`,
          },
        },
        (resp) => {
          let data = "";

          // A chunk of data has been received.
          resp.on("data", (chunk) => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on("end", () => {
            resolve(data);
          });
        }
      )
      .on("error", (err) => {
        console.log("Error: " + err.message);
        reject(err);
      })
  );
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

    const families = await fetchFamilies(streamlineConfiguration.secret);
    console.log(families);
    // TODO: create files here

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
