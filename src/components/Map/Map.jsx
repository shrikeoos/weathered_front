import React, { Component } from 'react';
import L from 'leaflet';

class Map extends Component {
  componentDidMount = () => {
    const URL =
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
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

    this.map.on('click', (event) => {
      console.log(event.latlng);
    });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      this.flyToNewLocation();
    }
  };

  flyToNewLocation = () => {
    const { lon, lat } = this.props.location.coord;
    this.map.flyTo([lat, lon], 11);
  };

  render() {
    return <div id="mapid" style={{ width: '1500px', height: '650px' }} />;
  }
}

export default Map;
