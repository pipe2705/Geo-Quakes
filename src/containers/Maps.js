import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "37%",
  height: "100%"
};

class Maps extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 37.78, lng: -122.176 }}
        >
          {this.props.earthquakes.map((item, i) => {
            return (
              <Marker
                key={i}
                position={{
                  lat: item.geometry.coordinates[1],
                  lng: item.geometry.coordinates[2]
                }}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(Maps);
