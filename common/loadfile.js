// Load in a file from a URL

const fs = require('fs');
const path = require('path');

module.exports = function (url, cb) {
  const file = path.resolve(__dirname, url);
  try {
    fs.readFile(file, 'utf8', (inErr, cont) => {
      if (!inErr) {
        cb(cont);
      }
    });
  } catch (fileErr) {
    console.log(fileErr);
  }
};
