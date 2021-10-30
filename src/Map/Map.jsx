import React, { useRef, useEffect, useState } from "react";
import "./map.scss";
import Api from "../config/Api";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXNyYWVsc29hcmVzIiwiYSI6ImNrdmUyeDhsM2JkYm4yem1udDJ4azA3cnkifQ.Zlsg1JsFYg85GMH6qSAPvQ";

let Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <>
      <div id="map" ref={mapContainer}></div>
    </>
  );
};

export default Map;
