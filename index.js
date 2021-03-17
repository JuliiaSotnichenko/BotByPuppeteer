const puppeteer = require('puppeteer');
async function bot() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://trello.com/');
  await page.setViewport({ width: 1920, height: 1080 });
  await page.waitForSelector('.form-control');
  await page.click('.form-control');
//   Submit new user
  await page.type('.form-control', 'july.soty@gmail.com', {
    delay: 100,
  });
  await page.click('button[type="submit"]');

  // next step create new user
  
  await page.waitForSelector('#displayName');
  await page.type('#displayName', 'Jilia Soty', {
    delay: 100,
  });
  await page.waitForSelector('#password');
  await page.type('#password', 'Q123498765!');
// checkbox
  await page.waitForSelector('.css-1fpmf6l');
  await page.click('.css-1fpmf6l');

  await page.waitForSelector('#signup-submit');
  await page.click('#signup-submit');

  await page.screenshot({ path: 'example.png' });
  await browser.close();
}
bot();