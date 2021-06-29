import React, { useState } from "react";
import ReactMapboxGl from "react-mapbox-gl";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoic2ltb24yOTExIiwiYSI6ImNrOWJsMGo4MjA1a28zZmwzeXczb2l4Y2UifQ.nivZe1N9MDMMvy7RN4xy2A"
});
  class SimpleMap extends React.Component {
    state = {
    latitude: -122.48686284636277,
    longitude: 37.61382862248211,
    zoom: [13]
    };
  render() {
    const { latitude, longitude, zoom } = this.state;
    return (
      <Map className="map"
            style="mapbox://styles/shyjana/ckqgeg05a0kaw17qgypokqasc"
            zoom={zoom}
            center={[latitude, longitude]}
            containerStyle={{
              height: "40vh",
              width: "100vw"
            }}
          >
          </Map>
        );
    }
}

export default SimpleMap;