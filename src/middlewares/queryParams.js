const { mesLetra, meses, tipo } = require('../formatfile/objTypes');

const logFormatQuery = (obj) => {
  const arrStr = Object.keys(obj).map((key) => `${key} - ${obj[key]}`);
  console.log('-->>', arrStr.join(' * '), '<<--', '\n' + new Date() + '\n');
};

const numValid = (num) => !!(!Number.isNaN(+num) && +num > 0);
const validMes = (arr, str) =>
  arr.find((mes) => mes.includes(str?.toLocaleLowerCase()));

const vencimentoAtual = (vencimento, ano) => {
  const mes = validMes(meses, vencimento);

  if (!mes)
    return {
      $gte: new Date(+ano, 0, 1),
      $lte: new Date(+ano, 11, 31),
    };
  const mesVencimento = meses.indexOf(mes);
  const start = new Date(+ano, mesVencimento, 1);
  const end = new Date(+ano, mesVencimento, 31);

  return {
    $gte: start,
    $lte: end,
  };
};
module.exports = (req, _res, next) => {
  try {
    const {
      ativo, //
      tipativo, //
      tipoVencimentopcao, //
      tipoopcao, //
      vencimento, //
      ano, //
      opcao, //
      offset,
      limit,
      min, //
      max, //
    } = req.query;
    logFormatQuery(req.query);
    const pagination = {
      limit: numValid(limit) ? limit : 20,
      offset: numValid(offset) ? offset : 0,
    };
    req.pag = pagination;
    req.search = {};
    if (opcao) {
      req.search = { ticket: opcao.toUpperCase() };
      return next();
    }
    if ((numValid(ano) && vencimento) || numValid(ano)) {
      req.search = {
        vencimento: vencimentoAtual(vencimento, ano),
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

    if (tipativo) {
      const onPn = tipo.ativo.find((e) => e.includes(tipativo.toUpperCase()));
      const regex = new RegExp(`${onPn}`, 'i');
      req.search.tipoAtivoPrincipal = { $regex: regex };
    }

    if (tipoVencimentopcao) {
      const eurAmer = tipo.opcao.find((e) =>
        e.includes(tipoVencimentopcao.toLocaleUpperCase())
      );
      const regex = new RegExp(`${eurAmer}`, 'i');
      req.search.tipoDerivativo = { $regex: regex };
    }

    if (tipoopcao) {
      const callPut = ['call', 'put'].find((e) =>
        e.includes(tipoopcao.toLocaleLowerCase())
      );
      const regex = new RegExp(`${tipo[callPut]}`, 'i');
      req.search.labelDerivativo = { $regex: regex };
    }

    return next();
  } catch (error) {
    return next({ messge: error.message });
  }
};
