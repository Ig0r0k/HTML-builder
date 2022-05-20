const { readdir } = require('fs/promises');
const { stat } = require('fs');
const path = require('path');

async function readFiles() {
  const filesArr = await readdir(path.join(__dirname, 'secret-folder'), {
    withFileTypes: true,
  });
  filesArr.forEach( e => {
    if (e.isFile()) {
      const pathFile = path.join(__dirname, `secret-folder/${e.name}`);
      const parse = path.parse(pathFile);
      stat(pathFile, (err, stats) => {
        console.log(`${parse.name} - ${parse.ext.slice(1)} - ${stats.size / 1024} kb`);
      });
    }
  })
}

readFiles();




