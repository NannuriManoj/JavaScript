const path = require('path')

// shows the path separater
console.log(path.sep)

// path.join is used to create the file path
const filePath = path.join('/folder', 'subfolder', 'text.txt');
console.log(filePath);

// basename is used to extract only the file not folders
const base = path.basename(filePath);
console.log(base);

// path.resolve is to get the absolute path for file system operations
const absolute = path.resolve(__dirname, 'folder', 'subfolder', 'text.txt');
console.log(absolute);