// Creating the map object
let myMap = L.map("map", { center: [40.758701, -111.876183], zoom: 5 });

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(myMap);

// Use this link to get the GeoJSON data.
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// The function that will determine the radius of a circle based on the magnitude of the earthquake
function markerSize(mag) {
  return Math.sqrt(mag) * 5;
}

function chooseColor(coordinates) {
  if (coordinates < 10) {
    return "#28E700";
  } else if (10 <= coordinates && coordinates < 30) {
    return "#85F928";
  } else if (30 <= coordinates && coordinates < 50) {
    return "#F0FF39";
  } else if (50 <= coordinates && coordinates < 70) {
    return "#FEC627";
  } else if (70 <= coordinates && coordinates < 90) {
    return "#FF8E28";
  } else if (coordinates >= 90) {
    return "#FE1F23";
  }
}

// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data, {
    // Styling each feature (in this case, an earthquake)
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        color: "black",
        fillColor: chooseColor(feature.geometry.coordinates[2]),
        fillOpacity: 0.8,
        radius: markerSize(feature.properties.mag),
        weight: 1.0
      }).bindPopup(`<h1>${feature.properties.place}</h1> <hr> <h3>Magnitude: ${feature.properties.mag}</h3>`);
    }
  }).addTo(myMap);

  // Create the legend
  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function(map) {
    let div = L.DomUtil.create("div", "legend");
    div.innerHTML = "<h4>Depth</h4>";
    let grades = ["< 10", "10 - 30", "30 - 50", "50 - 70", "70 - 90", ">= 90"];
    let colors = ["#28E700", "#85F928", "#F0FF39", "#FEC627", "#FF8E28", "#FE1F23"];
    for (let i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' + colors[i] + '"></i> ' +
        grades[i] + '<br>';
    }
    return div;
  };
  legend.addTo(myMap);

});