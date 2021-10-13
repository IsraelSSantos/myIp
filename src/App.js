import './App.scss';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar'

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
    </div>
  );
}

export default App;
