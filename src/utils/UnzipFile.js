const decompress = require('decompress');
const path = require('path');
const pathFileAssets = require('../../tmp/dirname');
const fs = require('fs/promises');

module.exports = async () => {
  try {
    console.log('Descompactando novo arquivo zip -> txt.');
    const pathFile = path.resolve(pathFileAssets, 'series.zip');
    await decompress(pathFile, pathFileAssets, {
      map: (file) => {
        file.path = `series${path.extname(file.path)}`;
        return file;
      },
    });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
