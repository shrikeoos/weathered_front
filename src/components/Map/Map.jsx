import React, { Component } from 'react';
import L from 'leaflet';

class Map extends Component {
  componentDidMount = () => {
    const URL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    this.map = L.map('mapid', {
      center: [49.8419, 24.0315],
      zoom: 3,
      attributionControl: false,
      layers: [
        L.tileLayer(URL, {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  };

  render() {
    return <div id="mapid" style={{ width: '1500px', height: '500px' }} />;
  }
}

export default Map;
