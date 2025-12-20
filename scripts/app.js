import { API_KEY } from "./environment.js";
let navId = document.getElementById("navId");
let cityName = document.getElementById("cityName");
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${37.957}&lon=${121.292}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(json => console.log(json))
}

getWeatherData();



function fetchWeather() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${37.957}&lon=${121.292}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < 5; i++) {
                document.getElementById('day' + (i + 1) + 'Min').innerHTML = 'Min:' + Number(data.list[i].main.temp_min).toFixed(0) + '&deg;F';
            }
            for (let i = 0; i < 5; i++) {
                document.getElementById('day' + (i + 1) + 'Max').innerHTML = 'Max:' + Number(data.list[i].main.temp_max).toFixed(0) + '&deg;F';
            }
            for (let i = 0; i < 5; i++) {
                document.getElementById('dayTemp' + (i + 1)).innerHTML = Number(data.list[i].main.temp).toFixed(0) + '&deg;F';
            }
            for (let i = 0; i < 5; i++) {
                document.getElementById('dayDesc' + (i + 1)).innerHTML = data.list[i].weather[0].description;
            }

            let mainTemp = document.getElementById('mainTemp')
            mainTemp.innerHTML = Number(data.list[0].main.temp).toFixed(0) + '&deg;F';
            let description = document.getElementById('description')
            description.innerHTML = data.list[0].weather[0].description.toUpperCase();

            console.log(data);
        });
}




navId.addEventListener('keypress', (e) => {
   cityName.innerText = e.target.value;
    
    console.log(e.target.value);
 
});






// let d = new Date();


// function CheckDay(monday) {
//     if (monday + d.getDay() > 6) {
//         return monday + d.getDay() - 7;

//     }
//     else {
//         return monday + d.getDay();
//     }
// }
// for (let i = 0; i < 5; i++) {
//     document.getElementById('monday' + (i + 1)).innerText = monday[CheckDay(i)];
// }
// function CheckDay2(tuesday) {
//     if (tuesday + d.getDay() > 6) {
//         return tuesday + d.getDay() - 7;

//     }
//     else {
//         return tuesday + d.getDay();
//     }
// }
// for (let i = 0; i < 5; i++) {
//     document.getElementById('tuesday' + (i + 1)).innerText = tuesday[CheckDay2(i)];
// }
// function CheckDay3(wednesday) {
//     if (wednesday + d.getDay() > 6) {
//         return wednesday + d.getDay() - 7;

//     }
//     else {
//         return wednesday + d.getDay();
//     }
// }
// for (let i = 0; i < 5; i++) {
//     document.getElementById('wednesday' + (i + 1)).innerText = wednesday[CheckDay3(i)];
// }
// function CheckDay4(thursday) {
//     if (thursday + d.getDay() > 6) {
//         return thursday + d.getDay() - 7;

//     }
//     else {
//         return thursday + d.getDay();
//     }
// }
// for (let i = 0; i < 5; i++) {
//     document.getElementById('thursday' + (i + 1)).innerText = thursday[CheckDay4(i)];
// }
// function CheckDay5(friday) {
//     if (friday + d.getDay() > 6) {
//         return friday + d.getDay() - 7;

//     }
//     else {
//         return friday + d.getDay();
//     }
// }
// for (let i = 0; i < 5; i++) {
//     document.getElementById('friday' + (i + 1)).innerText = friday[CheckDay5(i)];
// }