require('dotenv/config');
const Source = require('../models/Source');
const getSourceB3 = require('../utils/getLinkB3');

module.exports = class LinkerController {
  static attSource = async (preSource) => {
    try {
      const source = await getSourceB3(process.env.URL_SOURCE);
      const objAtt = {
        ...source,
        date: new Date(),
      };
      await Source.findByIdAndUpdate(preSource._id, objAtt);
      console.log('Atualizando o source no banco de dados.');
      return objAtt;
    } catch (error) {
      throw error;
    }
  };
  static getSource = async (_req, res, next) => {
    try {
      const date = new Date();
      const [dia, mes] = [date.getDate(), date.getMonth()];
      const [preSource] = await Source.find({}, '-__v');
      const [sDia, sMes] = [
        preSource.date.getDate(),
        preSource.date.getMonth(),
      ];

      if (sDia !== dia || sMes !== mes) {
        const attData = await LinkerController.attSource(preSource);
        return res.status(200).send(attData);
      }

      return res.status(200).send({
        text: preSource.text,
        src: preSource.src,
        date: preSource.date,
      });
    } catch (error) {
      return next({ message: error.message });
    }
  };
};
