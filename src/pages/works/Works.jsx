import React, { useEffect } from "react";
import "./works.scss";
import WorksCard from "../../components/worksCard/WorksCard";
import max from "../../assets/Annotation 2023-12-09 143536.png";
import oq from "../../assets/Annotation 2023-12-09 143851.png";
import beliss from "../../assets/Annotation 2023-12-09 143758.png";
import Aos from "aos";
const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
  }, []);
  return (
    <div className="container">
      <h1 className="ourWorks_title" data-aos="fade-up">
        Bizning oxirgi <span>ishlarimiz</span>
      </h1>
      <div className="works_page" data-aos="fade-up">
        <a href="https://oqtepalavash.uz/" target="_blank" data-aos="fade-up">
          <WorksCard
            num={"works_1"}
            src={oq}
            title={"oqtepalavash.uz"}
            desc={"oqtepa lavash brendi uchun qilingan sayt"}
          />
        </a>
        <a href="http://maxfire.uz/" target="_blank" data-aos="fade-up">
          <WorksCard
            num={"works_2"}
            src={max}
            title={"maxfire.uz"}
            desc={"maxfire ko'mir kampaniyasi uchun katalog sayt"}
          />
        </a>
        <a href="http://belissimo.uz/" target="_blank" data-aos="fade-up">
          <WorksCard
            num={"works_3"}
            src={beliss}
            title={"belissimo.uz"}
            desc={"belissimo lavash brendi uchun qilingan sayt"}
          />
        </a>
      </div>
    </div>
  );
};

export default Works;
