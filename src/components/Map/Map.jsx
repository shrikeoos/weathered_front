import React, { Component } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';

class Map extends Component {
  componentDidMount = () => {
    const URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    this.map = L.map('mapid', {
      center: [49.8419, 24.0315],
      zoom: 3,
      attributionControl: false,
      zoomControl: false,
      layers: [
        L.tileLayer(URL, {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
    this.markers = L.layerGroup().addTo(this.map);
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.cities !== prevProps.cities) {
      this.markers.clearLayers();
      this.props.cities.forEach(({ latitude, longitude }) => {
        L.marker([latitude, longitude]).addTo(this.markers);
      });
    }
  };

  flyToNewLocation = () => {
    if (Object.entries(this.props.location.data).length > 0) {
      const { lon, lat } = this.props.location.data.coord;
      this.map.flyTo([lat, lon], 10);
    }
  };

  addMarker = (lat, lon) => {
    L.marker([lat, lon]);
  };

  disableControls = () => {
    this.map.dragging.disable();
    this.map.touchZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.scrollWheelZoom.disable();
  };

  render() {
    return <div id="mapid" style={{ width: '1500px', height: '650px' }} />;
  }
}

const mapStateToProps = ({ location }) => ({ cities: location.cities });

export default connect(mapStateToProps)(Map);
