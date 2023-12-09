import "./collabs.scss";
import a from "../../assets/Annotation 2023-12-09 143536.png";
import b from "../../assets/Annotation 2023-12-09 143758.png";
import c from "../../assets/Annotation 2023-12-09 143851.png";
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
