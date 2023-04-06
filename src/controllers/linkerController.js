require('dotenv/config');
const Source = require('../models/Source');
const getSourceB3 = require('../utils/getLinkB3');

module.exports = class LinkerController {
  static getSource = async (_req, res, next) => {
    try {
      const [preSource] = await Source.find({}, '-__v');

      return res.status(200).send({
        message: 'Source na base de dados.',
        text: preSource.text,
        src: preSource.src,
        date: preSource.date,
      });
    } catch (error) {
      return next({ message: error.message });
    }
  };
};
