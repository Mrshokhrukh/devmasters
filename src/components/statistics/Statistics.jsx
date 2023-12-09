import React, { useEffect } from "react";
import "./stats.scss";
import img from "../../assets/650925f91a51bdc536b4d41a_element-image-01.svg";
import Aos from "aos";

const Statistics = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container">
      <div className="statistics" data-aos="fade-up">
        <div className="stats_img">
          <img src={img} alt="" />
        </div>
        <div className="stats_info">
          <div className="stats_text_infos">
            <h1 className="stats_title">
              DevMasters Jamoasi bilan sayohatga tayyormisiz ?
            </h1>
            <p>
              Biz IT sohasidagi muammolarni hal qilishga yordam beramiz.
              Istalgan turdagi veb-sayt, telegram bot, mobil ilova, SMM xizmati,
              internet magazin va CRM sistemalarni siz uchun yaratamiz. Barcha
              talablarga rioya qilgan holda, ilg'or veb-texnologiyalardan
              foydalaniladi, ixcham zamonaviy dizayn va har qanday qurilma uchun
              moslashuvchanlik, muammosiz ishlashni qo'llab-quvvatlash.
            </p>
            <span>
              Bizning jamoadagi mutahasislar kop yillardan beri dasturlash
              soxasida turli xil murakabligdagi muvoffaqiyatli loyihalarda faol
              ishlab kelishadi. brendizga mos veb-saytga buyurtma berishda siz
              uni ishlab chiqishni professionallarga ishonib topshirasiz.
            </span>
          </div>
          <div className="data_transaction">
            <div className="data_crm">
              <h2 className="data_tr_num">48+</h2>
              <p className="data_tr_title">Mamnun Mijozlar</p>
            </div>
            <div className="data_crm">
              <h2 className="data_tr_num">10k</h2>
              <p className="data_tr_title">Faol Foydalanuvchilar</p>
            </div>
            <div className="data_crm">
              <h2 className="data_tr_num">15+</h2>
              <p className="data_tr_title">Yakunlangan Loyihalar</p>
            </div>
          </div>

          <button className="aboutUs_btn">Biz haqimizda</button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
