const pathFile = __dirname + process.env.DEV_MODE ? '' : '/tmp';
module.exports = pathFile;
