import React, { Component } from 'react';
import {connect} from 'react-redux'
import {searchLocationByCoordinatesAction} from '../../redux/actions/location';
import L from 'leaflet';

class Map extends Component {
  componentDidMount = () => {
    const URL =
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
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

    this.disableControls();

    // this.map.on('click', (event) => {
    //   const {lat, lng} = event.latlng
    //   this.props.searchLocationByCoordinatesAction(lat, lng)
    // });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.location.data !== prevProps.location.data) {
      this.flyToNewLocation();
      // this.addMarker();
    }
  };

  flyToNewLocation = () => {
    if (Object.entries(this.props.location.data).length > 0) {
      const { lon, lat } = this.props.location.data.coord;
      this.map.flyTo([lat, lon], 10);
    }
  };

  addMarker = () => {
    const { lon, lat } = this.props.location.data.coord;
    L.marker([lat, lon]).addTo(this.map)
  }

  disableControls = () => {
    this.map.dragging.disable();
    this.map.touchZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.scrollWheelZoom.disable();
  }

  render() {
    return <div id="mapid" style={{ width: '1500px', height: '650px' }} />;
  }
}

const mapStateToProps = ({location}) => ({location});

export default connect(mapStateToProps, {searchLocationByCoordinatesAction})(Map);
