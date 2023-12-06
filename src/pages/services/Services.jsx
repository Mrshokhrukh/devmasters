import React from "react";
import "./services.scss";
import CardWrapper from "../../components/CardWrapper/CardWrapper";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaGlobeAfrica } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import { SiCivicrm } from "react-icons/si";
import { TbRobotFace } from "react-icons/tb";
import { TbWorldWww } from "react-icons/tb";
import { TbDeviceMobileUp } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
const Services = () => {
  return (
    <div className="container">
      <div className="services_page">
        <h1 className="services_title">
          <span>Nega aynan biz?</span> <br /> Nega ko`pchilik odamlar bizni
          tanlashadi? <br />
          Afzalliklarimiz
        </h1>
      </div>
      <div className="services_grid">
        <div>
          <CardWrapper
            num={"fourth"}
            icon={<TbWorldSearch />}
            title={"Veb-sayt"}
            desc={
              "Har qanday murakkablikdagi veb saytni yaratib beramiz va sizning g'oyalaringizni tez amalga oshishiga yordam beramiz"
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"fives"}
            icon={<TbRobotFace />}
            title={"Telegram bot"}
            desc={
              "Telegram botlar mijozlaringiz bilan aloqa qilishga yordam beradi. Telegram botlar har qanday biznes boshlash uchun eng yaxshi tanlov."
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"six"}
            icon={<TbDeviceMobileUp />}
            title={"Mobile ilova"}
            desc={
              "Mijozlarimizning g'oyalarini amalga oshirishda turli darajadagi Android, IOS mobil ilovalarini tez va sifatli yaratamiz."
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"seven"}
            icon={<RiAdminFill />}
            title={"Adminka"}
            desc={
              "Veb saytingiz qulay va sodda admin panelga ega bo’ladi bu esa o’z o’rnida sizga, saytga kirib boshqarishingizga imkon beradi."
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"eight"}
            icon={<SiCivicrm />}
            title={"crm (business control)"}
            desc={`Korxona xodimlari va mijozlarning o'rtasidagi munosabatlarni yanada rivojlantirish uchun
              qo'llaniladigan sistema yaratib beramiz.`}
          />
        </div>
        <div>
          <CardWrapper
            num={"nine"}
            icon={<FaCartArrowDown />}
            title={"Internet magazin"}
            desc={
              "Mahsulotlaringizni onlayn sotmoqchimisiz? Unda sizga Onlayn Internet Magazin xizmatimizni taklif qilamiz."
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"ten"}
            icon={<TbWorldWww />}
            title={"Domain va Xosting"}
            desc={
              "Domen va hosting yugur-yugur, bosh og’riqlarini unuting. Bizda domen UZ va hosting oyiga 30 ming so'm"
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"eleven"}
            icon={<RiSecurePaymentLine />}
            title={"Havfsizlik"}
            desc={
              "Bizning veb saytlar zamonaviy antivirus va fayrvollar bilan himoyalangan bo'lib, spambot va hujumlarga bardosh bera oladi."
            }
          />
        </div>
        <div>
          <CardWrapper
            num={"twelve"}
            icon={<IoPhonePortraitOutline />}
            title={"Moslashuvchan"}
            desc={
              "Biz yaratgan veb saytlar moslashuvchan bo’ladi. Ya’ni planshet va mobil versiya ega. Buning uchun aloxida to'lov qilinmaydi."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
