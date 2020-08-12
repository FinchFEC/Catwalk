const puppeteer = require('puppeteer');
const path = require('path');
const childProcess = require('child_process');

/* ******************* END TO END TESTS ******************* */

describe('Product Page', () => {
  childProcess.spawn('npm start');
  /**
   * *********************************************************************
   * *********************************************************************
   *                             DOCUMENTATION
   * puppeteer API: https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=outline
   * jest: https://jestjs.io/docs/en/getting-started
   * *********************************************************************
   * *********************************************************************
   */

  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('localhost:3000');

    // ERRORS THAT ARE LOGGED IN THE BROWSER ARE LOGGED HERE AS WELL. THIS IS TO DETERMINE WHETHER ERRORS EXIST.
    // ERRORS ARE NOT THROWN IF THEY EXIST BECAUSE THAT WOULD END THE TEST PREMATURELY
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.log('error in the page');
        console.log('console msg:', msg.text());
      }
    });
    /* IMPORTANT: FOR SOME REASON, HEADLESS MUST BE FALSE IF THE URL IS NOT DEPLOYED.
    OTHERWISE YOU'LL GET AN ERROR CONNECTING TO THE URL. IF YOU WANT HEADLESS TO BE TRUE,
    THE URL MUST BE DEPLOYED. */
    // await page.goto('https://google.com');
  });

  afterEach(async () => {
    await page.close();
  });

  afterAll(async () => {
    await browser.close();
    childProcess.kill('SIGINT');
  });

  test('should have correct page title', async () => {
    expect(page.title()).resolves.toBe('FEC-Project');
  });

  test('should render the review-tile-container', async () => {
    await page.waitForSelector('.review-tile-container', {
      visible: true,
      timeout: 500,
    });
  });

  test('should catch error when an element is not visible', async () => {
    await page
      .waitForSelector('.test-element', {
        visible: true,
        timeout: 500,
      })
      .catch((err) => {
        expect(err).toBeTruthy();
      });
  });

  test('should render the image modal when an image preview is clicked', async () => {
    await page.setViewport({
      width: 2560,
      height: 1440,
    });
    await page.waitForSelector('.review-tile-img');
    await page.click('.review-tile-img');
    await page.waitForSelector('.img-modal', {
      visible: true,
      timeout: 500,
    });
    await page.screenshot({
      path: path.join(__dirname, '/screenshots/img-modal.png'),
      type: 'png',
      fullpage: true,
    });
  });
});

/* ******************* UNIT TESTS ******************* */
describe('Unit Tests', () => {});
