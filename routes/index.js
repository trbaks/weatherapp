var express = require('express');
var router = express.Router();
const bodyParser= require('body-parser');
const request = require('request');
require('dotenv').config()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/weather', (req, res)=> {
  let zipcode= req.body.location;
  let apiKey= process.env.API_KEY;
  console.log(apiKey);
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`;
  
  request(url, (err, response, body)=> {
    if (err) {
      res.render('weather', {
        weather: null,
        error: "error, please try again, nothing was returned."
      })
    } else {
      let weather = JSON.parse(body);
      if (weather.main==undefined){
        res.render('weather', {
          weather: null,
          error: "error, please try again, weather was undefined."
        })
      } else {
        let weather = JSON.parse(body);
        res.render('weather', {
          name: weather.name,
          temp: weather.main.temp,
          humidity: weather.main.humidity,
          feels_like: weather.main.feels_like,
          speed: weather.wind.speed,
          icon: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
          description: weather.weather[0].description,
          error: null
        })
      }
    }
    console.log(JSON.parse(body));
    res.render('weather', {title: 'Weather'});
  })
})
module.exports = router;
