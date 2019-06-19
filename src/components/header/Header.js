import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="ui fixed menu header-wrapper">
      <div className="ui center aligned container">
        <Link to="/" className="left menu item logo-item">
          lamaArt
        </Link>

      <div className="right menu">
        <Link to="/" className="item header-item">
          Discover
        </Link>
        <Link to="/" className="item header-item">
          Blog
        </Link>
        <Link to="/" className="item header-item">
          Become Lama
        </Link>
        <Link to="/" className="item header-item">
          <i className="heart outline icon" />
        </Link>
        <Link to="/" className="item header-item">
          <i className="cart icon" />
        </Link>
        <Link to="/" className="item header-item">
          <i className="user outline icon" />
        </Link>
      </div>
      </div>
    </div>
  );
};



export default Header;