import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { langs } from "../../assets/data";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { closeSide, openSide } from "../../redux/sidebarSlice";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { LuPanelRightClose } from "react-icons/lu";
const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let isOpen = useSelector((state) => state.sidebar.isOpen);
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [topClass, setTopClass] = useState("top_head");
  const [scrollY, setScrollY] = useState(0);
  const [selectedLang, setLang] = useState(
    JSON.parse(localStorage.getItem("lang")) || langs[0]
  );
  const openSelector = () => {
    setIsOpenLang(!isOpenLang);
  };

  const changeLanguage = (param) => {
    langs.find((lang) => {
      if (lang.short === param) {
        lang.isSelected = true;
        lang.id = 1;
        localStorage.setItem("lang", JSON.stringify(lang));
        setLang(JSON.parse(localStorage.getItem("lang")));
        setIsOpenLang(false);
      } else {
        lang.id = 0;
        lang.isSelected = false;
      }
    });
  };

  useEffect(() => {
    langs.find((lang) => {
      if (lang.short === selectedLang.short) {
        lang.isSelected = true;
        lang.id = 1;
      } else {
        lang.id = 0;
        lang.isSelected = false;
      }
    });
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (scrollY > 20) {
      setTopClass("top_head scrolled");
    } else {
      setTopClass("top_head");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <div className={topClass}>
      <div className="header container">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className="nav_links">
          <NavLink to="/" className="nav_link">
            Asosiy
          </NavLink>
          <NavLink to="/services" className="nav_link">
            Xizmatlar
          </NavLink>
          <NavLink to="/prices" className="nav_link">
            Narxlar
          </NavLink>
          <NavLink to="/works" className="nav_link">
            Ishlarimiz
          </NavLink>
        </div>
        <div className="nav_right">
          <div className="language" onClick={openSelector}>
            <span className="lang_icon">
              <img src={selectedLang.url} alt="" />
            </span>
            <div className="lang_title">{selectedLang.short}</div>
            <ion-icon name="chevron-down-outline"></ion-icon>
            <div className="select_icon"></div>
            <div
              className={
                isOpenLang
                  ? `openLangSelector_box open`
                  : `openLangSelector_box`
              }
            >
              <ul className="select_language">
                {langs
                  .sort((a, b) => b.id - a.id)
                  .map((opt, i) => {
                    return (
                      <div key={i}>
                        <li
                          className={opt.isSelected ? `selectedOpt` : ""}
                          onClick={() => changeLanguage(opt.short)}
                        >
                          <img src={opt.url} alt="" width={20} /> {opt.lang}
                        </li>
                      </div>
                    );
                  })}
              </ul>
            </div>
          </div>
          <a href="#footer">
            <button className="btn contact_btn">Contact</button>
          </a>
        </div>

        <div className="burgerMenu">
          {isOpen ? (
            <button onClick={() => dispatch(closeSide())} className="sidebarIconAction closer">
              <LuPanelRightClose />
            </button>
          ) : (
            <button onClick={() => dispatch(openSide())} className="sidebarIconAction opener">
              <BsFillMenuButtonFill />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
