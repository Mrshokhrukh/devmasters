import React, { useEffect } from "react";
import "./home.scss";
import checkmark from "../../assets/checkmark.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Wrapper from "../../components/wrapper/Wrapper";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
  }, []);

  return (
    <div className="home container">
      <div className="home_content_wrapper" data-aos="fade-up">
        <div className="content_left  animate__animated animate__bounceInLeft">
          <h2 className="title">zamonaviy Web sayt yaratish xizmati</h2>
          <p className="description">
            O`zbekistonda eng arzon va sifatli Veb Sayt Yaratish xizmati. Biz
            sizga eng sifatli bo`lgan saytlarni hamyonbop narxga yaratib
            beramiz. Bizning maqsadimiz insonlarga hamyonbop narxda, tez,
            sifatli va qulay xizmat ko`rsatish
          </p>
          <div className="home_btns">
            <button className="btn contact_btn">Aloqa</button>
            <button className="btn services_btn">Hizmatlar</button>
          </div>

          <div className="casfe">
            <div>
              <img src={checkmark} alt="" />
              <p>24/7 online support</p>
            </div>
            <div>
              <img src={checkmark} alt="" />
              <p>tezkor hizmat</p>
            </div>
          </div>
        </div>
        <div className="content_right">
          <div className="frangetes animate__animated animate__bounceInRight">
            <Player
              autoplay
              loop
              src="https://lottie.host/fe4db243-e936-4111-ba34-ad4e67b92893/Kr6i5wDdC4.json"
              className="player_1"
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
            <Player
              autoplay
              loop
              src="https://lottie.host/152e7983-2f2c-4eab-b768-0a98848ffb89/0q72f1tvpX.json"
              className="player_2"
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <Wrapper
            text={"tezkor ⚡️"}
            color={"violent"}
            desc={"endi eng sifatli bo`lgan saytlar tezkor uslubda"}
          />
          <Wrapper
            text={"arzon 🤑"}
            color={"blue"}
            desc={"yangi saytlarni hamyonbop narxda olish imkoniyati"}
          />
          <Wrapper
            text={"zamonaviy ✨"}
            color={"green"}
            desc={"zamonaviy, tez, sifatli va qulay xizmat ko`rsatish"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
