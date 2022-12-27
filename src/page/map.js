import React, { Component, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  width: "500px",
  height: "700px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {
        lat: 32.0853,
        lng: 34.7818,
      },
      initialCenter: {
        lat: 32.0853,
        lng: 34.781769,
      },
    };
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={containerStyle}
        initialCenter={this.state.initialCenter}
      >
        <Marker name={"Dolores park"} position={this.state.position} />
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB1m0RcRybMQrRG1lzhrlVzvN4mYOykV1M",
})(MapContainer);
