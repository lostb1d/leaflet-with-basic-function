var mymap = L.map('map').setView([28, 83], 7);

// zoom control

mymap.zoomControl.setPosition('topright');

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibG9zdGIxIiwiYSI6ImNqaTBjcGd4bjE2cGMza3M2MWEzcTRwd3gifQ.Ps6yKHol2bmEPndMSeYKKw'
}).addTo(mymap);


var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var Hydda_Base = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
});




// map scale 



L.control.scale({ position: 'bottomleft' }).addTo(mymap);



// cordinates fuinction

mymap.on('mousemove', function (e) {
    console.log(e);
    $('.coordinates').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng} `)
});




// L.geoJSON(data).addTo(mymap);

var marker = L.markerClusterGroup();
var geojson = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.geometry.type);
    }
});
geojson.addTo(marker);
// marker.addTo(mymap);


// geocoder

var geocoder = L.Control.geocoder();
geocoder.addTo(mymap);


// leaflet layer controller 
var baseMaps = {
    'OSM': OpenStreetMap_Mapnik,
    'Hydda': Hydda_Base,
    'Water Color': Stamen_Watercolor,
}

var overlayMaps = {
    'GeoJSON Markers': marker
}

L.control.layers(baseMaps, overlayMaps, { collapsed: false, position: 'topleft' }).addTo(mymap);


// zoom to layer 

$('.zoom-to-layer').click(function () {
    mymap.setView([28, 83], 7)
});
