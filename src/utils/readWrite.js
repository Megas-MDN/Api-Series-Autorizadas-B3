const fs = require('fs/promises');

const readFile = async (path) => fs.readFile(`./src/assets/${path}`, 'utf-8');

const writeFile = async (file, path) => {
  await fs.writeFile(`./src/assets/${path}`, JSON.stringify(file, null, 2));
  console.log('Arquivo salvo com sucesso!');
};

module.exports = {
  readFile,
  writeFile,
};
