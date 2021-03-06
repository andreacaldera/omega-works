import Browser from 'zombie';
import '../../src/server';

const browser = new Browser({ site: `http://localhost:${process.env.PORT}` });

describe('Assets page', () => {
  it('loads with assets', (done) =>
    browser.visit('/assets', () => {
      browser.assert.success();
      browser.assert.status(200);
      browser.assert.element('.t-assets');
      done();
    })
  );
});
