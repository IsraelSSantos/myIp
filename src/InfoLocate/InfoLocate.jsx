import "./infoLocate.scss";
import React from "react";
import Card from "./Card";

let InfoLocate = (props) => {
  return (
    <>
      <div className="infoLocate">
        <Card
          value={props.ipOnCard}
          title="IP ADRESS"
          style={{ border: "0" }}
        />
        <Card value={props.locationOnCard} title="LOCATION" />
        <Card value={props.timeZoneOnCard} title="TIMEZONE" />
        <Card value={props.ispOnCard} title="ISP" />
      </div>
    </>
  );
};

export default InfoLocate;
