const Series = require('../models/Series');

module.exports = class SeriesController {
  static getByParams = async (req, res, next) => {
    try {
      const { sort } = req.query;
      const { pag, search } = req;
      // console.log(search, 'Obj busca controller');
      const series = await Series.find(search, '-__v -_id ')
        .sort({ ativPrincipal: 1, strike: sort ? 1 : -1 })
        .skip(pag.offset)
        .limit(pag.limit);
      return res.status(200).send({ series });
    } catch (error) {
      console.log(error.message);
      return next({ message: error.message });
    }
  };
};
