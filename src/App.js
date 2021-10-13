import './App.scss';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

      <h1> Ip: {ip.ip} </h1>
      <h1> Country: {ip.country} </h1>
      <h1> cc: {ip.cc} </h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      />
      <br />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
}

export default App;
