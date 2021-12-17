import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      //
      <div style={{ height: '300px', width: '400px' }} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD504NvjMxVf1QYAQ5p2r3_kwU_xAqfG_k" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
          
            lat={23.749058362675918}
            lng={90.40581768101282}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;