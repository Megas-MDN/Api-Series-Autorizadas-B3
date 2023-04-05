const decompress = require('decompress');
const path = require('path');
const fs = require('fs/promises');

module.exports = async () => {
  try {
    console.log('Descompactando novo arquivo zip -> txt.');
    await decompress('./src/assets/series.zip', './src/assets/', {
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
