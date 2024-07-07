import * as fs from 'fs'
import axios from 'axios';
import FormData from 'form-data';

const JWT = process.env.IPFS_JWT

const pinFileToIPFS = async (filePath: string, filename: string) => {
    const formData = new FormData();
    const file = fs.createReadStream(filePath);
    formData.append('file', file);
    const pinataMetadata = JSON.stringify({ name: filename });
    formData.append('pinataMetadata', pinataMetadata);
    const pinataOptions = JSON.stringify({ cidVersion: 0 });
    formData.append('pinataOptions', pinataOptions);
    try {
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
};

const downloadFile = async (url: string, savePath: string) => {
  try {

      const response = await axios.get(url, {
          responseType: 'stream',
      });

      const writer = fs.createWriteStream(savePath);

      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
      });
  } catch (error) {
      console.error(`Error downloading the file: ${error}`);
      return null
  }
}

export { pinFileToIPFS, downloadFile }