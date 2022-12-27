import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

/**
 * @author
 * @function MapF
 **/

const ShowMap = (props) => {
  const [loadData, setLoadData] = useState([]);

  const containerStyle = {
    width: "500px",
    height: "500px",
    position: "relative",
  };

  useEffect(() => {
    fetch(
      "https://my.foodtrack.co.il/api/app/truck_by_distance.php?lat=37.785834&lng=-122.406417"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoadData(data);
      });
  }, []);

  function getPosition(point) {
    const points = {
      lat: point.latlng.split(",")[0],
      lng: point.latlng.split(",")[1].split(" ").join(""),
    };

    console.log(points);
    return points;
  }

  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={containerStyle}
        initialCenter={{
          lat: 32.0853,
          lng: 34.781769,
        }}
      >
        {loadData.map((wq, index) => (
          <Marker key={index} position={getPosition(wq)} />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_KEYMAP,
})(ShowMap);
