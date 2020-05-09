/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/

var getButton = document.querySelector("#getButton");
getButton.addEventListener("click", getWeatherData);

function getWeatherData(event) {
    var latitudeInput = document.querySelector("#latitude");
    var latitude = latitudeInput.value;
  
    var longitudeInput = document.querySelector("#longitude");
    var longitude = longitudeInput.value;

    fetchWeatherData(latitude, longitude);
    event.preventDefault();
}

function fetchWeatherData(latitude, longitude) {
    var url = generateWeatherUrl(latitude, longitude);

    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(responseJson) {
        var temp = responseJson.main.temp;
        showTemperature(temp);
    });
}

function generateWeatherUrl(latitude, longitude) {
    var url = "https://fcc-weather-api.glitch.me/api/current";
    url += "?lat=" + latitude;
    url += "&lon=" + longitude;
    return url;
}

function showTemperature(temperature) {
    var mainDiv = document.querySelector("#main");
    var tempHeader = document.createElement("h3");
    mainDiv.appendChild(tempHeader);
    tempHeader.innerText = temperature;
}

// Barcelona: 41.38, 2.17
// London: 51.50, -0.12