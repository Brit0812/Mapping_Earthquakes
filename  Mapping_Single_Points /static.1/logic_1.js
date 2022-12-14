// Add console.log to check to see if our code is working.
console.log("working");

// creating the object with a center and zoom 
//let map= L.map('mapid').setView([34.0522, -118.2437], 14);
//map needs to be under config- otherwise it wont run
// We create the tile layer that will be the background of our map.
//var marker = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
// the marker will be replaced with a circle

//the same marker as before (keeping the coordiantes but adding a zoom)
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "yellow"
 }).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);