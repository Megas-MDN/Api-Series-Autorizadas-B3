require('dotenv/config');
const Source = require('../models/Source');
const getSourceB3 = require('../utils/getLinkB3');

module.exports = class LinkerController {
  static makeObjSource = async () => {
    const source = await getSourceB3(process.env.URL_SOURCE);
    const objSource = {
      ...source,
      date: new Date(),
    };
    return objSource;
  };
  static createSource = async () => {
    const objSource = await LinkerController.makeObjSource();
    const source = new Source(objSource);
    await source.save();
    return source;
  };

  static attSource = async (preSource) => {
    try {
      const objAtt = await LinkerController.makeObjSource();
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
      if (!preSource) {
        const source = await LinkerController.createSource();
        return res.status(201).send(source);
      }
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

  static checkSource = async (_req, res, next) => {
    try {
      const [source] = await Source.find({});
      const pageSource = await getSourceB3(process.env.URL_SOURCE);
      if (pageSource.src === source.src) {
        return res
          .status(200)
          .send({ message: 'Base already updated', src: pageSource.src });
      }
      await Source.findByIdAndUpdate(source._id, {
        ...pageSource,
        date: new Date(),
      });

      return res.status(200).send({
        message: 'Source updated successfully',
        src: pageSource.src,
        date: new Date(),
      });
    } catch (error) {
      return next({ message: error.message });
    }
  };
};
