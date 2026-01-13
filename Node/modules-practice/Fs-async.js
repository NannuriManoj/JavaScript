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

copyFile();
