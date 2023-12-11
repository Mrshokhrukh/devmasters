import "./collabs.scss";
import a from "../../assets/logos/maxfire.png";
import b from "../../assets/logos/logo.webp";
import c from "../../assets/logos/logo_2.0.svg";
import Aos from "aos";
import { useEffect } from "react";
const Collabs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="container">
      <div className="swiper_infitine_wraps" data-aos="fade-up">
        <div>
          <img src={a} alt="" />
          <img src={b} alt="" />
          <img src={c} alt="" />
          <img src={a} alt="" />
          <img src={b} alt="" />
          <img src={c} alt="" />
          <img src={a} alt="" />
        </div>
        <div>
          <img src={b} alt="" />
          <img src={c} alt="" />
          <img src={a} alt="" />
          <img src={b} alt="" />
          <img src={c} alt="" />
          <img src={a} alt="" />
          <img src={b} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collabs;
