import React from "react";
import "./pictures.css";

const Pictures = props => (
  <div className="pictures">
    <div className="img-container">

      <img id="pic" alt={props.name} src={props.image} />

    </div>
  </div>
);

export default Pictures;