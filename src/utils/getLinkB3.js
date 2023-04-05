require('dotenv/config');

let puppeteer;
let chrome = {};
let opt = {};

const setPuppeteer = async () => {
  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    chrome = require('chrome-aws-lambda');
    puppeteer = require('puppeteer-core');
    opt = {
      args: [...chrome.args, '--hide-scrollbars', '--disable-web-security'],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    };
    console.log('puppeteer configurado');
  } else {
    puppeteer = require('puppeteer');
  }
};

const main = async (url) => {
  await setPuppeteer();
  const browser = await puppeteer.launch(opt);
  const page = await browser.newPage();
  await page.goto(url);

  const link = await page.evaluate(() => {
    const strInteresse = 'Lista Completa de Séries Autorizadas';
    const arr = Array.from(document.querySelectorAll('a'), (el) => ({
      text: el.innerText,
      src: el.href,
    }));
    return arr.find((el) => el.text.includes(strInteresse));
  });

  await browser.close();
  return link;
};

module.exports = main;
