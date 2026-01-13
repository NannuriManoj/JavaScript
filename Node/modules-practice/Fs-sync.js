const { readFileSync, writeFileSync } = require('fs')

// used encoding for converting the binary into the human readable text
// we use encoding because file is stored in binary on disk
// in our case we used 'utf-8' for encoding
const first = readFileSync('./folder/subfolder/text.txt', 'utf-8')
console.log(first);

writeFileSync('./folder/subfolder/Fs-sync-text.txt', `The result is ${first}`)
