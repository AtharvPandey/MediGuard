import React from "react";
import { BiHome, BiHelpCircle } from "react-icons/bi";
import { FaFileUpload, FaEye, FaShareAltSquare } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="menu--sidebar">
      <div className="logo">
        <h2>MediGuard</h2>
      </div>

      <div className="menu--list">
        <Link to="/dashboard" className="item">
          <MdSpaceDashboard className="icon" />
          Dashboard
        </Link>
        <Link to="/" className="item">
          <BiHome className="icon" />
          Home
        </Link>
        <Link to="/upload" className="item">
          <FaFileUpload className="icon" />
          Upload File
        </Link>
        <Link to="/getdata" className="item">
          <FaEye className="icon" />
          View File
        </Link>
        <Link to="/share" className="item">
          <FaShareAltSquare className="icon" />
          Share Access
        </Link>
        <Link to="#" className="item">
          <BiHelpCircle className="icon" />
          help
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
