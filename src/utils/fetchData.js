const fs = require('fs');
const path = require('path');
const pathFileAssets = require('../assets/dirname');
const axios = require('axios');

module.exports = async (Url) => {
  console.log('Dowload do arquivo zip');
  const opt = {
    url: Url,
    method: 'GET',
    responseType: 'arraybuffer',
    encoding: 'binary',
  };
  const response = await axios(opt);
  const data = Buffer.from(response.data, 'binary');

  console.log('Gravando o novo arquivo zip');
  const pathFile = path.resolve(pathFileAssets, 'series.zip');
  console.log(pathFile);
  fs.writeFileSync(pathFile, data);
  console.log('Sucesso!');
};
