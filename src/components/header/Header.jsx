import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="top_head">
      <div className="header container">
        <div className="logo">
          <img src={""} alt="" />
        </div>
        <div className="nav_links">
          <NavLink to="/" className='nav_link'>Home</NavLink>
          <NavLink to="/" className='nav_link'>About</NavLink>
          <NavLink to="/" className='nav_link'>Services</NavLink>
          <NavLink to="/" className='nav_link'>Price</NavLink>
          <NavLink to="/" className='nav_link'>Works</NavLink>
        </div>
        <div className="nav_right">
          <div className="language">uz</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
