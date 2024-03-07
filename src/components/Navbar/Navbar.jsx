import React from "react";
import "./style.css";
import Link from "./Links/Links";

const Navbar = () => {
  return (
    <div className="nav-container absolute-center">
      <div className="nav-left">
        <a href="/">
          <img src="/images/home/logo.png" alt="" />
          <h1>
            Youthful <br />
            Whispers
          </h1>
        </a>
      </div>
      <div className="open-menu">Menu</div>
      <div className="nav-right">
        <div className="cont-nav-right">
          <div className="close-menu">Close</div>
          <Link />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
