import React from "react";
import "./pictures.css";

const Pictures = props => {  
  
  return  (
    <img className="pic" 
      alt={props.name} src={props.image} 
      onClick={() => props.changeClickedStatus(props.id)}
    />
  )
}
 
export default Pictures;