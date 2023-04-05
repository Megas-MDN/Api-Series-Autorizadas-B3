const {
  bigStrToArrLines,
  filterNoPipeLines,
  formatLines,
  objectfyFile,
} = require('./formatFunctions.js');
const { readFile, writeFile } = require('../utils/readWrite.js');

module.exports = async (fileFrom, fileTo) => {
  try {
    const fileUnformated = await readFile(fileFrom);
    const arrLinesFile = bigStrToArrLines(fileUnformated);
    const arrLinesFormat = formatLines(arrLinesFile);
    const file = filterNoPipeLines(arrLinesFormat);
    const headerFile = file.shift();
    await writeFile([headerFile, ...objectfyFile(file)], fileTo);
  } catch (error) {
    console.log('Ocorreu um erro na formatação dos dados. \n\n*****\n');
    console.log(error.message);
    return error;
  }
};
