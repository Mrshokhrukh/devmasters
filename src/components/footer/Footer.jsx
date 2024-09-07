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
          <div className="social_link">
            <a href="">
              <FaTelegramPlane /> Telegram
            </a>
            <a href="">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="">
              <FaInstagram /> Instagram
            </a>
            <a href="">
              <FaFacebookF /> Facebook
            </a>
            <a href="">
              <IoCallSharp /> Qo'ng'iroq
            </a>
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
