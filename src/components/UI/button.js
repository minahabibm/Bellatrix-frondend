import React from "react";
import './button.css';


function ButtonUI(props) {
  return (
      <button className = {props.rank} onClick = {props.onClick}>{props.name}</button>
  );
}

export default ButtonUI;