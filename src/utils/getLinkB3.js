require('dotenv/config');
const puppeteer = require('puppeteer');

const main = async (url) => {
  console.log('Abrindo o launcher');
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
  console.log('Procurando o link');
  await page.goto(url);
  const link = await page.evaluate(() => {
    const strInteresse = 'Lista Completa de Séries Autorizadas';
    const arr = Array.from(document.querySelectorAll('a'), (el) => ({
      text: el.innerText,
      src: el.href,
    }));
    return arr.find((el) => el.text.includes(strInteresse));
  });

  console.log('Fechando o browser e retornando o link');
  await browser.close();
  return link;
};

module.exports = main;
