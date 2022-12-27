import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./css.css";

/**
 * @author
 * @function MapF
 **/

const ShowMap = (props) => {
  const [loadData, setLoadData] = useState([]);
  const [initialCenter, setinitialCenter] = useState({
    lat: 32.0853,
    lng: 34.781769,
  });
  const [selectedPoint, setSelectedPoint] = useState("");

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
    return points;
  }

  const onMarkerClick = (wq) => {
    setSelectedPoint(wq);
    const points = {
      lat: wq.latlng.split(",")[0],
      lng: wq.latlng.split(",")[1].split(" ").join(""),
    };

    setinitialCenter(points);
  };

  const centerBack = () => {
    setSelectedPoint();
    setinitialCenter({
      lat: 32.0853,
      lng: 34.781769,
    });
  };

  const pik_point = (loadData) => {
    onMarkerClick(loadData);
  };

  return (
    <div className="pageMap">
      <div className="mapList">
        {selectedPoint ? (
          <div>
            <button onClick={centerBack}>איקס</button>
            <div className="object_list card">
              <h3>{selectedPoint.slogan}</h3>
              {/* <img src={selectedPoint.logo} alt="" /> */}
              <p> {selectedPoint.name}</p>
              <p> {selectedPoint.phone}</p>
            </div>
          </div>
        ) : (
          <div>
            {loadData.map((list, index) => (
              <a key={index} onClick={() => pik_point(list)}>
                <div key={index} className="object_list card">
                  <h3>{list.slogan}</h3>
                  <img className="logo" src={list.logo} alt="" />
                  <p> {list.name}</p>
                  <p> {list.phone}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="map">
        <Map
          google={props.google}
          zoom={14}
          style={containerStyle}
          initialCenter={{ lat: "32.0853", lng: "34.781769" }}
          showingInfoWindow={true}
          center={initialCenter}
        >
          {loadData.map((wq, index) => (
            <Marker
              key={index}
              position={getPosition(wq)}
              onClick={() => onMarkerClick(wq)}
            />
          ))}
        </Map>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_KEYMAP,
})(ShowMap);
