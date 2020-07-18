import React from "react";
import './switch.css';


function SwitchUI(props) {
  return (
    <div>
        <input type="checkbox" id={props.id} className="checkbox" />  
    <label htmlFor={props.id} className="switch"></label>
    </div>
  );
}

export default SwitchUI;