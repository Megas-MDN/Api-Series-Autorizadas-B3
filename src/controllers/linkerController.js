require('dotenv/config');
const Source = require('../models/Source');
const getSourceB3 = require('../utils/getLinkB3');

module.exports = class LinkerController {
  static getSource = async (_req, res, next) => {
    try {
      const [preSource] = await Source.find({}, '-__v');
      if (!preSource) return res.status(200).send({ src: '', text: '' });
      return res.status(200).send({
        message: 'Source na base de dados.',
        text: preSource.text,
        src: preSource.src,
        date: preSource.date,
      });
    } catch (error) {
      console.log('Error na source');
      console.log(error.message);
      return next({ message: error.message });
    }
  };
};
