const fetchData = require('../utils/fetchData');
const Source = require('../models/Source');
const Series = require('../models/Series');
const Header = require('../models/Header');
const UnzipFile = require('../utils/UnzipFile');
const formatFile = require('../formatfile/index');
const { readFile } = require('../utils/readWrite');

module.exports = class LoadDataController {
  static loadData = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization || authorization !== process.env.HASH_ATT) {
        return res.status(401).send({ message: 'Token invalid!' });
      }
      const [source] = await Source.find({});
      await fetchData(source.src);
      await UnzipFile();
      await formatFile('series.txt', 'series.json');
      const file = await readFile('series.json');
      const [header, ...dataOptions] = JSON.parse(file);
      const index = Math.floor(Math.random() * dataOptions.length);
      console.log('Excluindo a base Series & Header');

      await Series.collection.drop();
      await Header.collection.drop();
      console.log('Inserindo os lotes de dados atualizados.');
      Series.insertMany(dataOptions);
      Header.insertMany([{ header }]);
      return res.status(200).send({
        message: 'Updated!',
        total: dataOptions.length,
        header,
        randomOption: dataOptions[index],
      });
    } catch (error) {
      console.log(error.message);
      next({ message: error.message });
    }
  };
};
