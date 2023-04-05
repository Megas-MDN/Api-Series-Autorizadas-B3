module.exports = class SeriesController {
  static getByParams = (req, res, next) => {
    const { ativo, vencimento, opcao } = req.query;
    console.log({ ativo, vencimento, opcao });
    return res.status(200).send({ opcao, vencimento, ativo });
  };
};
