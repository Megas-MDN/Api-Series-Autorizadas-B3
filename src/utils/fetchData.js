const fs = require('fs');
const https = require('https');
const url = require('url');
// const unzipFile = require('./unzipFile');
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
  fs.writeFileSync(`./src/assets/series.zip`, data);
};

/*
(Url) => {
  https.get(url.parse(Url), (res) => {
    const data = [];
    res
      .on('data', (chk) => {
        data.push(chk);
      })
      .on('end', () => {
        const bffy = Buffer.concat(data);
        fs.writeFileSync(`./src/assets/series.zip`, bffy);
        unzipFile();
      });
  });
};
*/
