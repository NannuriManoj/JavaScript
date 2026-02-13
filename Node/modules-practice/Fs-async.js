const { Console } = require('console');
const fs = require('fs/promises');

async function copyFile() {
  try {
    // wait for file to be read
    const data = await fs.readFile('./folder/subfolder/text.txt', 'utf-8');
    // write the data in the output.txt
    await fs.writeFile('./folder/output.txt', data);
    console.log('File copied successfully!');
  } 
  // error are handled here
  catch (err) {
    console.error('Error:', err);
  }
}

const appendFile = async ()=>{
  try {
    await fs.appendFile('./folder/subfolder/text.txt', 'utf-8');
    console.log("Append the file to the previous file");
  } catch (error) {
    console.log(error);
  }
}

appendFile();
copyFile();
