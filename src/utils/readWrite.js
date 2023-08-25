const fs = require('fs/promises');
const path = require('path');
const pathFileAssets = require('../../tmp/dirname');

const readFile = async (pathFile) =>
  fs.readFile(path.resolve(pathFileAssets, pathFile), 'utf-8');

const writeFile = async (file, pathFile) => {
  await fs.writeFile(
    path.resolve(pathFileAssets, pathFile),
    JSON.stringify(file, null, 2)
  );
  console.log('Arquivo salvo com sucesso!');
};

module.exports = {
  readFile,
  writeFile,
};
