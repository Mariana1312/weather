const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://weather.com/weather/today/l/5c95b44a2f64030b0186c9671a0ddda2a0a4934130e0935e5c484ddf93d6a9bc';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('#dp0-details-wind', html).each(function() {
      console.log($(this).text());
    });
  })
  .catch(function(err) {
    //handle error
  });