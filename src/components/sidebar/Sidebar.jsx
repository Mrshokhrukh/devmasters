import React, { useState } from "react";
import "./sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { closeSide } from "../../redux/sidebarSlice";
const Sidebar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  //;
  let isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className={isOpen ? `sidebar open` : "sidebar"}>
      <div className="sidebar_info">
        <div
          className="modal_link"
          onClick={() => {
            navigate("/");
            dispatch(closeSide());
          }}
        >
          <span className="iconFr">
            <FaHome />
          </span>{" "}
          <p className="textFr">Asosiy</p>
        </div>
        <div
          className="modal_link"
          onClick={() => {
            navigate("/");
            dispatch(closeSide());
          }}
        >
          <span className="iconFr">
            <RiTeamFill />
          </span>{" "}
          <p className="textFr">Biz haqimizda</p>
        </div>
        <div
          className="modal_link"
          onClick={() => {
            navigate("/services");
            dispatch(closeSide());
          }}
        >
          <span className="iconFr">
            <GrServices />
          </span>{" "}
          <p className="textFr">Xizmatlar</p>
        </div>

        <div
          className="modal_link"
          onClick={() => {
            navigate("/prices");
            dispatch(closeSide());
          }}
        >
          <span className="iconFr">
            <IoIosPricetags />
          </span>{" "}
          <p className="textFr">Narxlar</p>
        </div>
        <div
          className="modal_link"
          onClick={() => {
            navigate("/works");
            dispatch(closeSide());
          }}
        >
          <span className="iconFr">
            <FaBriefcase />
          </span>{" "}
          <p className="textFr">Ishlarimiz</p>
        </div>

        <div
          className="modal_link"
          onClick={() => {
            navigate("/");
            dispatch(closeSide());
          }}
        >
          <span className="iconFr">
            <IoCall />
          </span>{" "}
          <p className="textFr">Aloqa</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
