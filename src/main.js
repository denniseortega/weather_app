import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
//import { weather } from './weather.js';

$('#weatherLocation').click(function() {
  let city = $('#location').val();
  $('#location').val("");

  let request = new XMLHttpRequest();
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();

  let getElements = function(response) {
    $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  }
});
