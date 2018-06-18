import React from "react";
import "./pictures.css";

const Pictures = props => {
  return (
    <div id="container">
      <img
        className="pic"
        alt={props.name}
        src={props.image}
        onClick={() => props.changeClickedStatus(props.id)}
      />
    </div>
  );
};

export default Pictures;
