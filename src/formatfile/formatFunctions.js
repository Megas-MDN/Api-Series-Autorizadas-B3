const { indexItemsType02, indexItemsType03 } = require('./objTypes.js');

const concatStrLine = (arr, obj) => {
  const arrStr = Object.values(obj).map((index) =>
    arr[index].trim().replace(/  /gm, ' ').replace(/  /gm, ' ')
  );
  return arrStr.join('|');
};

const formatLines = (arrLines) =>
  arrLines.map((line) => {
    const arrLine = line.trim().replace(/  /gm, ' ').split('|');
    if (+arrLine[indexItemsType02.tipoDaSerie] === 2)
      return concatStrLine(arrLine, indexItemsType02);
    if (+arrLine[indexItemsType03.tipoDaSerie] === 3)
      return concatStrLine(arrLine, indexItemsType03);
    return line.trim();
  });

const filterNoPipeLines = (arr) =>
  arr.filter((line) => line.split('|').length > 1);

const bigStrToArrLines = (file) => file.split('\r\n');

const objectfyFile = (arr) =>
  arr.map((line) => {
    const obj = {};
    const arrLine = line.split('|');
    Object.keys(indexItemsType02).forEach((key, i) => {
      if (key === 'vencimento') {
        obj[key] = `${arrLine[i].substr(4, 2)}/${arrLine[i].substr(
          6,
          2
        )}/${arrLine[i].substr(0, 4)}`;
      } else {
        obj[key] = Number.isNaN(+arrLine[i]) ? arrLine[i] : +arrLine[i];
      }
    });
    return obj;
  });

module.exports = {
  bigStrToArrLines,
  formatLines,
  filterNoPipeLines,
  objectfyFile,
};
