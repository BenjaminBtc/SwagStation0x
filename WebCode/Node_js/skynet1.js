import { SkynetClient } from "skynet-js";

// create client
const client = new SkynetClient();


async function example() {
  try {
    // upload
    const { skylink } = await client.uploadFile(file);

    // download skylink
    await client.downloadFile(skylink);

    console.log('Download successful');
  } catch (error) {
    console.log(error)
  }
}
