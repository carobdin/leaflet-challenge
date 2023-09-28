# leaflet-challenge

# Earthquake Map

This code creates an interactive map that displays earthquake data using Leaflet.js library and GeoJSON data from the USGS (United States Geological Survey).

## Features

- Creates a map object centered at latitude 40.758701 and longitude -111.876183 with a zoom level of 5.
- Adds the OpenStreetMap tile layer to the map.
- Defines a function `markerSize()` that calculates the radius of a circle marker based on the magnitude of the earthquake.
- Defines a function `chooseColor()` that assigns a color to each earthquake marker based on its depth.
- Retrieves GeoJSON data from the USGS API using the provided link.
- Creates a GeoJSON layer with the retrieved data and styles each earthquake marker using circle markers.
- Binds a popup to each marker showing the location and magnitude of the earthquake.
- Adds the GeoJSON layer to the map.
- Creates a legend control and adds it to the bottom right corner of the map, displaying the depth ranges and their corresponding colors.

## Usage

To use this code, follow these steps:

1. Include the Leaflet.js library in your HTML file.
2. Create an HTML element with the id "map" to render the map.
3. Replace the `link` variable with the desired GeoJSON data source URL.
4. Customize the `markerSize()` and `chooseColor()` functions as needed.
5. Run the code in a web browser and view the interactive map.

## Credits

- This code uses the Leaflet.js library for creating the map and handling GeoJSON data.
- The GeoJSON earthquake data is retrieved from the USGS API.
- The OpenStreetMap tile layer is provided by OpenStreetMap contributors.

## License

Dataset created by the United States Geological Survey.
