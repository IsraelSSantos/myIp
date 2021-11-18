import React from "react";
import "./map.scss";

let Map = (props) => {
  return (
    <>
      <div id="map" ref={props.mapContainer}></div>
    </>
  );
};

export default Map;
