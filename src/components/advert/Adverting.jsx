import React, { useEffect } from "react";
import "./adver.scss";
import img from "../../assets/advert.png";
import Aos from "aos";
const Adverting = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="advertising_fss container">
      <img src={img} alt="" data-aos="fade-up" />
      <div className="adverting_right" data-aos="fade-up">
        <h1>Biz bilan biznesingizni rivojlantiring</h1>
        <p>
          Brendizga mos veb-saytga buyurtma berishda siz uni ishlab chiqishni
          professionallarga ishonib topshirasiz !
        </p>
        <div className="adver_btns">
          <button className="btn btn_tryFree">Tekinga 0$</button>
          <a href="#footer">
            <button className="btn btn_contact">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adverting;
