import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';

// Styles
import { CustomMarker } from './styles';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  render() {
    const { handleMapClick, markers } = this.props;
    return (
      <MapGL
        {...this.state.viewport}
        onClick={handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {markers.length > 0
          && markers.map(marker => (
            <Marker
              key={marker.id}
              latitude={marker.latitude}
              longitude={marker.longitude}
              onClick={handleMapClick}
              captureClick
            >
              <CustomMarker alt={marker.name} src={marker.avatar} />
            </Marker>
          ))}
      </MapGL>
    );
  }
}

Map.propTypes = {
  handleMapClick: PropTypes.func.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  markers: state.users.data,
});

const mapDispatchToProps = _dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
