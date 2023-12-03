import React from "react";
import "./adver.scss";
import img from "../../assets/advert.png";
const Adverting = () => {
  return (
    <div className="advertising_fss container">
      <img src={img} alt="" />
      <div className="adverting_right">
        <h1>Biz bilan biznesingizni rivojlantiring</h1>
        <p>
          Brendizga mos veb-saytga buyurtma berishda siz uni ishlab chiqishni
          professionallarga ishonib topshirasiz !
        </p>
        <div className="adver_btns">
          <button className="btn btn_tryFree">Try free 0$</button>
          <button className="btn btn_contact">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Adverting;
