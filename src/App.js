import './App.scss';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar'
import InfoLocate from './InfoLocate/InfoLocate';
import Map from './Map/Map'
import Api from './Api'

function App() {

  const [ip, setIp] = useState([]);

  async function initApi() {
    let takeIP = await Api.getIp();
    setIp(takeIP);
  }

  useEffect(() => {
    initApi();
  }, [])

  return (
    <div className="App">
      <h1>IP Adress Tracker </h1>
      <SearchBar />
      <InfoLocate />
      <Map />
    </div>
  );
}

export default App;
