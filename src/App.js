import './App.scss';
import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import InfoLocate from './InfoLocate/InfoLocate';
import Map from './Map/Map'


function App() {

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
