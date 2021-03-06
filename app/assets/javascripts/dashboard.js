const L = require('leaflet');
require('leaflet/dist/leaflet.css')

class Dashboard {
  showMainMap() {
    var map = L.map('main_map').setView([50.06, 19.93], 13);

    L.Icon.Default.imagePath = 'webpack/leaflet'

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    //L.marker([51.5, -0.09]).addTo(map)
    //  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //  .openPopup();
  }
}

export default Dashboard;
