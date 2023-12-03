import React from "react";
import './cardWrapper.scss';

const CardWrapper = ({ num, icon, title, desc }) => {
  return (
    <div className={`designed_card_${num}`}>
      <div className="card_icon">
        <span>{icon}</span>
      </div>
      <div className="card_info">
        <div className="card_title">{title}</div>
        <div className="card_description">{desc}</div>
      </div>
    </div>
  );
};

export default CardWrapper;
