import './App.scss';
import React, { useRef, useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar'
import InfoLocate from './InfoLocate/InfoLocate';
import Map from './Map/Map'
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import axios from "axios";
import Loader from "./Loader/Loader";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXNyYWVsc29hcmVzIiwiYSI6ImNrdmUyeDhsM2JkYm4yem1udDJ4azA3cnkifQ.Zlsg1JsFYg85GMH6qSAPvQ";

function App() {

  const [label, setLabel] = useState("");
  const [ipOnCard, setIpOnCard] = useState("");
  const [locationOnCard, setLocationOnCard] = useState("");
  const [timeZoneOnCard, setTimeZoneOnCard] = useState("");
  const [ispOnCard, setIpsOnCard] = useState("");
  const [valueBtn, setValueBtn] = useState(<Loader />);
  // const [mapContainered, setMapContainered] = useState(map.cu);

  //Default API MAP settings 
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState('');
  const [lat, setLat] = useState('');
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    initApi();
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  let getInputValue = (event) => {
    let inpuValue = event.target.value;
    setLabel(inpuValue);
  };

  async function initApi() {
    let request = axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_7LDRF2ZbEAmkxKp57dYuTgxz9kn6k&ipAddress=${label}`).
      then((response) => {
        setLat(response.data.location.lat);
        setLng(response.data.location.lng);
        setValueBtn(<ArrowForwardIosOutlined />);
        setIpOnCard(response.data.ip);
        setLocationOnCard(`${response.data.location.region}, ${response.data.location.country} 
        ${response.data.as.asn}`);
        setTimeZoneOnCard(`UTC${response.data.location.timezone} `);
        setIpsOnCard(response.data.isp);

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lng, lat],
          zoom: zoom,
        });

      }).catch((error) => {
        console.warn("Algo inesperado aconteceu :( " + error);
      });

  }

  const changeBTN = () => {
    setValueBtn(<Loader />);
  };

  return (
    <div className="App">
      <h1>IP Adress Tracker </h1>
      <SearchBar
        getInputValue={getInputValue}
        changeBTN={changeBTN}
        valueBtn={valueBtn}
        initApi={initApi} />
      <InfoLocate
        ipOnCard={ipOnCard}
        locationOnCard={locationOnCard}
        timeZoneOnCard={timeZoneOnCard}
        ispOnCard={ispOnCard}
      />
      <Map
        mapContainer={mapContainer} />
    </div>
  );
}

export default App;