import React from "react";
import "./workCard.scss";
const WorksCard = ({ num, src, title, desc }) => {
  return (
    <div className={`works_card_${num}`}>
      <div className="workCard_img">
        <img src={src} alt="" />
      </div>
      <div className="workCard_info">
        <div className="workCard_title">{title}</div>
        <div className="workCard_description">{desc}</div>
        <button className="workCard_btn">Saytni ko'rish</button>
      </div>
    </div>
  );
};

export default WorksCard;
