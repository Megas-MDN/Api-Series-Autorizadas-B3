const puppeteer = require('puppeteer');

const main = async (url) => {
  const browser = await puppeteer.launch();
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
