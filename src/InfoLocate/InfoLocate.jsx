import "./infoLocate.scss";
import React from "react";
import Card from "./Card";

let InfoLocate = () => {
  return (
    <>
      <div className="infoLocate">
        <Card title="IP ADRESS" style={{ border: "0" }} id={1} />
        <Card title="LOCATION" id={2} />
        <Card title="TIMEZONE" id={3} />
        <Card title="ISP" id={4} />
      </div>
    </>
  );
};

export default InfoLocate;
