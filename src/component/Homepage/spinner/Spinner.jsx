import React from "react";
import "./spinner.scss";
function Spinner({ bg }) {
  return (
    <div className="parent-circle" style={{ margin: "auto" }}>
      <div className="spinner1" style={{ backgroundColor: "#fec303" }}></div>
      <div className="spinner2" style={{ backgroundColor: "#fec303" }}></div>
    </div>
  );
}

export default Spinner;
