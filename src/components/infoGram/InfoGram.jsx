import CardWrapper from "../CardWrapper/CardWrapper";
import "./info.scss";
import { MdAccessTime } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbDeviceImacCode } from "react-icons/tb";
import { useEffect } from "react";
import Aos from "aos";
import Bulb from "../../test/Bulb";
const InfoGram = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="infoGram container" data-aos="fade-up">
      <h1 className="infogram_title">Nega aynan biz ?</h1>
      <div className="infogram_cards">
        <div>
          <CardWrapper
            num={"first"}
            icon={<TbDeviceImacCode />}
            title={"Zamonaviy ilovalar"}
            desc={
              "Xar bir yaratgan saytimizni dizayni noyob va zamonaviy bo'ladi va boshqa saytlardan ajralib turadi."
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"second"}
            icon={<MdAccessTime />}
            title={"Tezkor va sifatli ish"}
            desc={
              "Biz doimo mijozlarimizga oz muddatda mukammal bo'lgan loyihalarni taqdim etamiz va ularni hursand qilamiz !"
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"third"}
            icon={<GiTakeMyMoney />}
            title={"Hamyonbop narxlar"}
            desc={
              "Xizmatlarimiz narxi siz va biznesingiz uchun albatta ma'qul va to'g'ri tanlov bo'ladi"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default InfoGram;
