require('dotenv/config');
const puppeteer = require('puppeteer');

const main = async (url) => {
  const browser = await puppeteer.launch({
    args: [
      '--disable-setuid-sandbox',
      '--no-sandbox',
      '--single-process',
      '--no-zygote',
    ],
    executablePath:
      process.env.NODE_ENV === 'production'
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
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
