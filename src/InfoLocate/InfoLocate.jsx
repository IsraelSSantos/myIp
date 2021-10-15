import "./infoLocate.scss";
import React from "react";
import Card from "./Card";
import { border } from "@mui/system";

let InfoLocate = () => {
  return (
    <>
      <div className="infoLocate">
        <Card title="IP ADRESS" style={{ border: "0" }} id={1} />
        <Card title="LOCATION" content="1212121212" id={2} />
        <Card title="TIMEZONE" content="123123123" id={3} />
        <Card title="ISP" content="12312312" id={4} />
      </div>
    </>
  );
};

export default InfoLocate;
