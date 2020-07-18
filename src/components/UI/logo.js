import React from "react";
import './logo.css';

function LogoUI() {
  return (
    <svg height="35" width="150">
      <text x="30" y="20" className="text" >Campus</text>
      <ellipse cx="65" cy="14" rx="40" ry="12" className="ellipse" />
      <circle cx="38" cy="14" r="12" className="circle"/>
      <circle cx="27" cy="14" r="12" className="circle"/>
    </svg>
  );
}

export default LogoUI;