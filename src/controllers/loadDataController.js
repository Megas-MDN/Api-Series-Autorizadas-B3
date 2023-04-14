const fetchData = require('../utils/fetchData');
const Source = require('../models/Source');
const Series = require('../models/Series');
const Header = require('../models/Header');
const UnzipFile = require('../utils/UnzipFile');
const formatFile = require('../formatfile/index');
const { readFile } = require('../utils/readWrite');

module.exports = class LoadDataController {
  static updateSource = async (src) => {
    console.log('Encontrando a atualizando o source.');
    try {
      const [source] = await Source.find({});
      if (!source) {
        const newSource = new Source({
          text: 'Lista Completa de Séries Autorizadas',
          src,
          date: new Date(),
        });
        return newSource.save();
      }
      source.src = src;
      source.date = new Date();
      await source.save();
    } catch (error) {
      console.log(error.message);
      console.log('Falha ao atualizar a Source / processo continua');
    }
  };

  static getDataFormated = async (src) => {
    console.log('Baixando e formatando data');
    await fetchData(src);
    await UnzipFile();
    await formatFile('series.txt', 'series.json');
    const file = await readFile('series.json');
    const [header, ...dataOptions] = JSON.parse(file);
    const index = Math.floor(Math.random() * dataOptions.length);
    return [header, dataOptions, index];
  };

  static loadData = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization || authorization !== process.env.HASH_ATT) {
        return res.status(401).send({ message: 'Token invalid!' });
      }
      const { src } = req.body;

      console.log('Formatando os dados.');
      const [[header, dataOptions, index]] = await Promise.all([
        LoadDataController.getDataFormated(src),
        LoadDataController.updateSource(src),
      ]);

      try {
        console.log('Dropando o banco <Series | Header>');
        await Promise.all([Series.collection.drop(), Header.collection.drop()]);
        console.log('Banco zerado pronto para a nova base.');
      } catch (error) {
        console.log(error.message);
        console.log('Porem os dados serão inseridos / criados.');
      }

      console.log('Inserindo os lotes de dados atualizados.');
      Series.insertMany(dataOptions);
      Header.insertMany([{ header }]);
      console.log(
        'Base atualizada com sucesso.',
        new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
      );
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
