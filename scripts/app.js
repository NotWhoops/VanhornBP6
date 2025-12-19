import { API_KEY } from "./environment";

function getWeatherData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${37.957}&lon=${121.292}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => console.log(json))
}

getWeatherData();