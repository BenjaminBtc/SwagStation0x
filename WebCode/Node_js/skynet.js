import { SkynetClient } from "skynet-js";

// create a client
const client = new SkynetClient();

// Assume we have a file from an input form.

async function example() {
  try {
    // upload
    const { skylink } = await client.uploadFile(file);

    // download
    await client.downloadFile(skylink);

    console.log('Download successful');
  } catch (error) {
    console.log(error)
  }
}
