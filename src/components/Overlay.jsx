import React from "react";
import "../css/App.css";
function Overlay(props) {
  return <div className={props.show && "overlay"}>{props.children}</div>;
}

export default Overlay;
