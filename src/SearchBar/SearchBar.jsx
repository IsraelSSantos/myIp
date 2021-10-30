import React, { useState, useEffect } from "react";
import "./searchBar.scss";
import Button from "../../node_modules/@material-ui/core/Button";
import TextField from "../../node_modules/@material-ui/core/TextField";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import axios from "axios";
import Loader from "../Loader/Loader";
import $ from "jquery";

let SearchBar = (props) => {
  let [label, setLabel] = useState("");

  async function initApi(label) {
    let request = axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_sHxDGp8Lay2D3N9Wpn0YP4wlVhn9K&ipAddress=${label}`
      )
      .then((response) => {
        setValueBtn(<ArrowForwardIosOutlined />);
        changeIpOnCard(1, response.data.ip);
        changeLocationOnCard(
          2,
          `${response.data.location.region}, ${response.data.location.country} 
          ${response.data.as.asn}`
        );
        changeTimeZoneOnCard(3, `UTC${response.data.location.timezone} `);
        changeIsp(4, response.data.isp);
      })
      .catch((error) => {
        console.warn("Algo inesperado aconteceu :( " + error);
      });
  }
  async function setIpOnCard(label) {
    const ipSet = await initApi(label);
  }

  useEffect(() => {}, []);

  let getInputValue = (event) => {
    let inpuValue = event.target.value;
    setLabel(inpuValue);
  };

  let changeIpOnCard = (id, value) => {
    $(`#${id}`).html(`${value}`);
  };
  let changeLocationOnCard = (id, locationValue) => {
    $(`#${id}`).html(`${locationValue}`);
  };
  let changeTimeZoneOnCard = (id, timezoneValue) => {
    $(`#${id}`).html(`${timezoneValue}`);
  };
  let changeIsp = (id, isp) => {
    $(`#${id}`).html(`${isp}`);
  };

  let callAllFunc = () => {
    setIpOnCard(label);
    changeLocationOnCard();
    changeTimeZoneOnCard();
  };

  const changeBTN = () => {
    setValueBtn(<Loader />);
  };

  const [valueBtn, setValueBtn] = useState(<ArrowForwardIosOutlined />);

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
            changeBTN();
            callAllFunc();
          }}
        >
          {valueBtn}
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
