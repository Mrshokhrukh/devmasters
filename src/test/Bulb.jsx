import React from "react";
import "./bulb.scss";
const Bulb = ({ num }) => {
  return <div className={`bulb_of_${num}`}></div>;
};

export default Bulb;
