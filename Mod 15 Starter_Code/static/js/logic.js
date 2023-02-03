function createMap(quakes) {

    //tile Layer
    var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    //create baseMaps object
    var baseMaps = {
        "Street View": streetmap
    }

    //Create overlayMaps
    var overlayMaps = {
        "Earthquakes": quakes
    }

    // Create a map object.
    var map = L.map("map", {
        center: [15.5994, -28.6731],
        zoom: 3,
        layers: [streetView, quakes]
    });

    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(map);
}




url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'
data =d3.json(url)
console.log(data)