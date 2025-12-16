import { API_KEY } from './environment.js';

// const button = document.getElementById("getLocationBtn");
// const output = document.getElementById("output");

// button.addEventListener("click", () => {
//     // Check if the browser supports geolocation
//     if (!navigator.geolocation) {
//         output.textContent = "Geolocation is not supported by your browser.";
//         return;
//     }

//     output.textContent = "Getting your location...";

//     navigator.geolocation.getCurrentPosition(
//         // Success callback
//         (position) => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
            
//             console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//             output.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
//         },

//         // Error callback
//         (error) => {
//             switch (error.code) {
//                 case error.PERMISSION_DENIED:
//                     output.textContent = "User denied the request for Geolocation.";
//                     break;
//                 case error.POSITION_UNAVAILABLE:
//                     output.textContent = "Location information is unavailable.";
//                     break;
//                 case error.TIMEOUT:
//                     output.textContent = "The request to get user location timed out.";
//                     break;
//                 default:
//                     output.textContent = "An unknown error occurred.";
//             }
//         }
//     );
// });