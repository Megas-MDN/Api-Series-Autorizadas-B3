const { mesLetra, meses, tipo } = require('../formatfile/objTypes');

const numValid = (num) => !!(!Number.isNaN(+num) && +num > 0);

const vencimentoAtual = (vencimento) => {
  if (!meses.includes(vencimento)) return {};
  const date = new Date();
  const mesAtual = date.getMonth();
  const mesVencimento = meses.indexOf(vencimento);
  let year = date.getFullYear();
  if (mesVencimento < mesAtual) {
    year += 1;
  }
  const start = new Date(year, mesVencimento, 1);
  const end = new Date(year, mesVencimento, 31);

  return {
    $gte: start,
    $lte: end,
  };
};
module.exports = (req, _res, next) => {
  try {
    const {
      ativo,
      tipativo,
      tipopcao,
      vencimento,
      atual,
      opcao,
      offset,
      limit,
      min,
      max,
    } = req.query;

    const pagination = {
      limit: numValid(limit) ? limit : 20,
      offset: numValid(offset) ? offset : 0,
    };
    req.pag = pagination;
    req.search = {};
    if (opcao) {
      req.search = { ticket: opcao };
      return next();
    }
    if (atual && vencimento) {
      req.search = {
        vencimento: vencimentoAtual(vencimento),
      };
    } else if (vencimento) {
      const [call, put] = mesLetra[vencimento] ?? ['Z', 'Z'];
      const regex = new RegExp(`^.{4}(${call}|${put})`, 'gm');
      req.search = {
        ticket: { $regex: regex },
      };
    }

    if (numValid(min)) {
      req.search = { ...req.search, strike: { $gte: min } };
    }
    if (numValid(max)) {
      req.search = {
        ...req.search,
        strike: { ...(req.search?.strike || {}), $lte: max },
      };
    }
    if (ativo) {
      req.search.ativPrincipal = ativo.toUpperCase();
    }

    if (tipativo && tipo.ativo.includes(tipativo.toUpperCase())) {
      const regex = new RegExp(`${tipativo.toUpperCase()}`, 'i');
      req.search.tipoAtivoPrincipal = { $regex: regex };
    }

    if (tipopcao && tipo.opcao.includes(tipopcao.toUpperCase())) {
      const regex = new RegExp(`${tipopcao}`, 'i');
      req.search.tipoDerivativo = { $regex: regex };
    }

    return next();
  } catch (error) {
    return next({ messge: error.message });
  }
};
