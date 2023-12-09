import React, { useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import "./priceCard.scss";
import Aos from "aos";
const PriceCard = ({ num, title, explain, price, includes }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
  }, []);
  return (
    <div className={`priceCard_${num}`} data-aos="fade-up">
      <div className="priceCard_inner">
        <div className="pr_card_top">
          <p className="pr_card_title">{title}</p>
          <span className="pr_card_explain">{explain}</span>
        </div>
        <div className="pr_card_info">
          <div className="pr_card_price">
            <p>${price}</p>
          </div>
          <div className="pr_card_includes">
            <p className="include_ttl">Ichiga oladi:</p>
            <div className="inc_desc">
              {includes.map((item, i) => {
                return (
                  <p key={i}>
                    <span>
                      <FaRegCircleCheck />
                    </span>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pr_card_bottom">
          <a href="">
            <div className="pr_priceCard_btn">Ma'lumot olish</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
