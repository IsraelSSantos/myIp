import "./card.scss";
import React from "react";

let Card = (props) => {
  return (
    <>
      <div className="card-container" style={props.style}>
        <h5>
          {" "}
          {props.title}
          {``}
        </h5>
        <h2 id={props.id}>{``}</h2>
      </div>
    </>
  );
};

export default Card;
