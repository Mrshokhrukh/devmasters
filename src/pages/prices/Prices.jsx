import React, { useEffect } from "react";
import "./prices.scss";
import { service_prices } from "../../assets/data";
import PriceCard from "../../components/priceCard/PriceCard";
import Aos from "aos";

const Prices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
  }, []);
  return (
    <div className="container">
      <h1 className="prices_page_title" data-aos="fade-up">
        Siz uchun hamyonbop narxdagi <span>Veb Saytlar</span>
      </h1>
      <div className="prices_page" data-aos="fade-up">
        {service_prices.map((item, i) => {
          return (
            <PriceCard
              key={i}
              num={item.num}
              title={item.title}
              explain={item.explain}
              price={item.price}
              includes={item.includes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Prices;
