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
      maxBounds: new L.latLngBounds(
        new L.LatLng(-89.98155760646617, -180),
        new L.latLng(89.99346179538875, 180)
      ),
      maxBoundsViscosity: 0.75,
      minZoom: 2,
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

    if (this.props.focusedCity !== prevProps.focusedCity) {
      const { latitude, longitude } = this.props.focusedCity;
      this.map.flyTo([latitude, longitude], 10);
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

const mapStateToProps = ({ location }) => ({
  cities: location.cities,
  focusedCity: location.focusedCity,
});

export default connect(mapStateToProps)(Map);
