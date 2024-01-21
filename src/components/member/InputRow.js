import React from "react";
import './InputRow.css';

function InputRow(props) {
  return (
  <div className="inputRow">
    <label htmlFor={props.id} className="inputRowLabel">{props.value}</label>
    <input id={props.id} className="inputRowInput" type={props.type}/>
  </div>
  );
}

export default InputRow;
