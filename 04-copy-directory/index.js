
const path = require("path");
const fsPromises = require("fs").promises;

async function copyFile() {
  const pathFrom = path.join(__dirname, "files");
  const pathGoal = path.join(__dirname, "files-copy");
  fsPromises.mkdir(pathGoal, { recursive: true });
  const files = await fsPromises.readdir(pathFrom, {
    withFileTypes: true,
  });
  files.forEach(e => {
    const filePath = path.join(pathFrom, e.name);
    const copyPath = path.join(pathGoal, e.name);
    fsPromises.copyFile(filePath, copyPath);
  })
}

copyFile();