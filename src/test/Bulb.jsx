import React from "react";
import "./bulb.scss";
const Bulb = ({ num }) => {
  return (
    <div className={`bulbBlur blur_${num}`}>
      <div></div>
    </div>
  );
};

export default Bulb;
