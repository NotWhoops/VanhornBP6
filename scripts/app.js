import { API_KEY } from './environment.js';

function getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=952e7cec2cadaedaa7f4d6e715973a12')
      .then(response => response.json())
      .then(json => console.log(json))
}

getWeatherData();