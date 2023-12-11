import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer" id="footer">
        <div className="footer_top">
          <img src={logo} className="footer_logo" alt="" width={150} />
        </div>
        <div className="footer_center">
          <div className="ft_ct_wars">
            <p id="footer_ct_title">social</p>
            <div className="blanked_link">
              <p>
                <span>
                  <FaFacebookF />
                </span>
                <a href="">facebook</a>
              </p>
              <p>
                <span>
                  <FaInstagram />
                </span>
                <a href="">instagram</a>
              </p>
              <p>
                <span>
                  <FaTelegramPlane />
                </span>
                <a href="">telegram</a>
              </p>
              <p>
                <span>
                  <FaLinkedinIn />
                </span>
                <a href="">linkedIn</a>
              </p>
            </div>
          </div>
          <div className="ft_ct_wars">
            <p id="footer_ct_title">pages</p>
            <div>
              <NavLink to="/">asosiy</NavLink>
              <NavLink to="/about">biz haqimizda</NavLink>
              <NavLink to="/services">hizmatlar</NavLink>
              <NavLink to="/prices">narxlar</NavLink>
              <NavLink to="/works">ishlarimiz</NavLink>
            </div>
          </div>
          <div className="ft_ct_wars">
            <p id="footer_ct_title">sites</p>
            <div>
              <a href="/">site 1</a>
              <a href="/">site 2</a>
              <a href="/">site 3</a>
              <a href="/">site 4</a>
              <a href="/">site 5</a>
            </div>
          </div>
          <div className="ft_ct_wars">
            <p id="footer_ct_title">contact</p>
            <div className="blanked_link">
              <p>
                <span>
                  <IoCallSharp />
                </span>
                <a href="tel:+998915236003">+99891 523 60 03</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <span>
            <MdOutlineCopyright />
          </span>
          <p>Copyright 2023.</p>
          <p>
            powered by <span>devmasters</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
