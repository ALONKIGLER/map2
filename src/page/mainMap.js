import React from "react";
import FlatListPlace from "../components/FlatMap";
import ShowMap from "../components/map";
import "./css.css";

export default function Mainmap() {
  return (
    <div className="pageMap">
      <div className="map">
        <ShowMap />
      </div>

      <div className="mapList">
        <FlatListPlace />
      </div>
    </div>
  );
}
