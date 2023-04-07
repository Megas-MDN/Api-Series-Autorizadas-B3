const indexItemsType02 = {
  // opçoes de ações
  tipoDaSerie: 0,
  ativPrincipal: 1,
  tipoAtivoPrincipal: 7,
  labelDerivativo: 3,
  ticket: 13,
  tipoDerivativo: 15,
  strike: 16,
  vencimento: 17,
};

const indexItemsType03 = {
  // opções de ndices
  tipoDaSerie: 0,
  ativPrincipal: 5,
  tipoAtivoPrincipal: 4,
  labelDerivativo: 2,
  ticket: 11,
  tipoDerivativo: 13,
  strike: 14,
  vencimento: 16,
};

const mesLetra = {
  janeiro: ['A', 'M'],
  fevereiro: ['B', 'N'],
  marco: ['C', 'O'],
  abril: ['D', 'P'],
  maio: ['E', 'Q'],
  junho: ['F', 'R'],
  julho: ['G', 'S'],
  agosto: ['H', 'T'],
  setembro: ['I', 'U'],
  outubro: ['J', 'V'],
  novembro: ['K', 'W'],
  dezembro: ['L', 'X'],
};

const meses = [
  'janeiro',
  'fevereiro',
  'marco',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

const tipo = {
  ativo: ['ON', 'PN'],
  opcao: ['EUROPEU', 'AMERICANO'],
  call: 'OPCOES COMPRA',
  put: 'OPCOES VENDA',
};

module.exports = {
  indexItemsType02,
  indexItemsType03,
  mesLetra,
  meses,
  tipo,
};
