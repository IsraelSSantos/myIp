import React, { useState, useEffect } from "react";
import "./searchBar.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import axios from "axios";
import $ from "jquery";

let SearchBar = (props) => {
  let [ip, setIp] = useState([]);
  let [label, setLabel] = useState("");

  async function initApi(label) {
    return axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_sHxDGp8Lay2D3N9Wpn0YP4wlVhn9K&ipAddress=${label}`
      )
      .then((response) => {
        setIp(response.data.ip);
        changeIpOnCard(1, response.data.ip);
        console.log(response.data);
      })
      .catch((error) => {
        console.warn("Algo inesperado aconteceu :( " + error);
      });
  }
  async function setIpOnCard(label) {
    let ipSet = await initApi(label);
  }
  useEffect(() => {}, []);

  let getInputValue = (event) => {
    let inpuValue = event.target.value;
    setLabel(inpuValue);
  };

  let changeIpOnCard = (id, value) => {
    $(`#${id}`).html(`${value}`);
  };

  return (
    <>
      <div className="search-container">
        <TextField
          id="outlined-basic fullWidth textBar"
          className="txtField"
          label="Endereço IP"
          variant="filled"
          fullWidth
          onChange={getInputValue}
        />

        <Button
          variant="contained"
          className="btn-search"
          color="primary"
          onClick={() => {
            setIpOnCard(label)
          }}
        >
          <ArrowForwardIosOutlined />
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
