/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/

// You can construct the URL to fetch from like this. The lat and lon values will come from the input value. 
var lat = 35;
var lon = 160;
var url = "https://fcc-weather-api.glitch.me/api/current";
url += "?lat=" + lat;
url += "&lon=" + lon;