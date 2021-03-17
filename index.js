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
  await page.waitForSelector('#displayName');
//   await page.click('input[name="email"]');
  await page.type('.form-control', 'juli.soty@gmail.com', {
    delay: 100,
  });
  await page.click('button[type="submit"]');


//   await page.waitForSelector('input[name="password"]');
//   await page.click('input[name="password"]');
//   await page.type('input[name="password"]', '1111111111', {
//     delay: 100,
//   });
//   await page.type('.basic_form--textInput--3ZlM2 basic_form--input--3cO2P form_inputs--input--r-7Uo form_inputs--brand--nxF5w auth_branding--brand--3FsKf  lazy_input--lazyInput--2kTZE', '123456789', {
//     delay: 300,
//   });
  //await page.keyboard.press('Enter');
  await page.screenshot({ path: 'example.png' });
//   await browser.close();
}
bot();