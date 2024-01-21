import React from "react";
import './Button.css';

function Button(props) {
  return (
    <button className="btnMove" onClick={() => props.onClick()}>{props.value}</button>
  );
}

export default Button;