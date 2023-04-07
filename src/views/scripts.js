const url = document.getElementById('url');
const obj = {};
// document.URL +
url.value = '/search?';
const urlFix = '/search?';
let urlPreOpc = '';

document.getElementById('home').href = document.URL;
const btn = document.getElementById('request');
const opcao = document.getElementById('opcao');
const fields = document.getElementById('fields');
const ativo = document.getElementById('ativo');
const sort = document.getElementsByClassName('sort')[0];
const idSort = document.getElementById('sort');
const europeu = document.getElementById('europeu');
const americano = document.getElementById('americano');
const ambosAmerEur = document.getElementById('ambos-ativo-vencimento');
const offset = document.getElementById('offset');
const limit = document.getElementById('limit');
const on = document.getElementById('on');
const pn = document.getElementById('pn');
const ambosOnPn = document.getElementById('ambos');
const call = document.getElementById('call');
const put = document.getElementById('put');
const ambosCallPut = document.getElementById('ambos-tipo-opcao');
const mesesSelect = document.getElementById('meses-select');
const ano = document.getElementById('ano');
const min = document.getElementById('min');
const max = document.getElementById('max');

document
  .getElementById('clipboardCopy')
  .addEventListener('click', clipboardCopy);
async function clipboardCopy(e) {
  e.preventDefault();
  let text =
    document.URL +
    'search?' +
    document.querySelector('#url').value.split('search?')[1];
  await navigator.clipboard.writeText(text);
  alert('Url copiada!' + `\n${text}`);
}

const attUrlOpc = (opc) => {
  const urlFinal = urlFix + `opcao=${opc}`;
  url.value = urlFinal;
};

opcao.addEventListener('input', () => {
  if (opcao.value) {
    fields.style.display = 'none';
    sort.style.display = 'none';
    urlPreOpc = urlPreOpc ? urlPreOpc : url.value;
    // obj.opcao = opcao.value;
    attUrlOpc(opcao.value);
  } else {
    fields.style.display = 'flex';
    sort.style.display = 'flex';
    urlPreOpc = '';
    attUrl(obj);
  }
});

max.addEventListener('input', () => {
  obj.max = max.value;
  attUrl(obj);
});

min.addEventListener('input', () => {
  obj.min = min.value;
  attUrl(obj);
});

ano.addEventListener('input', () => {
  obj.ano = ano.value;
  attUrl(obj);
});

mesesSelect.addEventListener('change', () => {
  obj.vencimento = mesesSelect.value;
  attUrl(obj);
});

idSort.addEventListener('change', () => {
  if (idSort.checked) {
    obj.sort = 'true';
  } else {
    obj.sort = null;
  }
  attUrl(obj);
});

put.addEventListener('change', () => {
  if (put.checked) {
    obj.tipoopcao = 'put';
    attUrl(obj);
  }
});

call.addEventListener('change', () => {
  if (call.checked) {
    obj.tipoopcao = 'call';
    attUrl(obj);
  }
});

ambosCallPut.addEventListener('change', () => {
  if (ambosCallPut.checked) {
    obj.tipoopcao = null;
    attUrl(obj);
  }
});

ambosOnPn.addEventListener('change', () => {
  if (ambosOnPn.checked) {
    obj.tipativo = null;
    attUrl(obj);
  }
});

pn.addEventListener('change', () => {
  if (pn.checked) {
    obj.tipativo = 'pn';
    attUrl(obj);
  }
});

on.addEventListener('change', () => {
  if (on.checked) {
    obj.tipativo = 'on';
    attUrl(obj);
  }
});

limit.addEventListener('input', () => {
  obj.limit = limit.value;
  attUrl(obj);
});

offset.addEventListener('input', () => {
  obj.offset = offset.value;
  attUrl(obj);
});

europeu.addEventListener('change', () => {
  if (europeu.checked) {
    obj.tipoVencimentopcao = 'europeu';
    attUrl(obj);
  }
});

americano.addEventListener('change', () => {
  if (americano.checked) {
    obj.tipoVencimentopcao = 'americano';
    attUrl(obj);
  }
});

ambosAmerEur.addEventListener('change', () => {
  if (ambosAmerEur.checked) {
    obj.tipoVencimentopcao = null;
    attUrl(obj);
  }
});

ativo.addEventListener('input', () => {
  obj.ativo = ativo.value;
  attUrl(obj);
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  window.open();
});

const attUrl = (keyValue) => {
  const newObj = Object.keys(keyValue).reduce(
    (a, key) => (keyValue[key] ? { ...a, [key]: keyValue[key] } : a),
    {}
  );
  const urlFinal =
    urlFix +
    Object.keys(newObj)
      .map((key) => `${key}=${newObj[key]}`)
      .join('&');
  url.value = urlFinal;
};
