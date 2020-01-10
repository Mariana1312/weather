const express = require('express')
const app = express()
const puppeteer = require('puppeteer')
const $ = require('cheerio')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.get('/get-city-data/:cityName', async (req, res) => {
let CITY = req.params.cityName.replace(" ", "-")
    
const url = `https://www.theweathernetwork.com/il/weather/-/${CITY}`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url); // URL is given by the "user" (your client-side application)
    const pageHtml = await page.content();
    let data = {};

    $('.detailed-metrics', pageHtml).each(function() {
        key = $($(this).children()[0]).html();
        value = $($(this).children()[1]).html();
        data[key] = value;
      });

      data.temperature = $($(".temp", pageHtml)[0]).text(); 
      data.icon = $($(".weather-icon img", pageHtml)[0]).attr("src"); 

      console.log(data);

      await browser.close();

    res.send(data);

})

app.listen(4000);
