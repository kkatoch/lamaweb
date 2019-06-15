import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="ui fixed inverted menu">
      <div className="left menu">
        <Link to="/" className="logo-item item">
          | Lama Art |
        </Link>
      </div>

      <div className="right menu">
        <Link to="/" className="item">
          Discover
        </Link>
        <Link to="/" className="item">
          Blog
        </Link>
        <Link to="/" className="item">
          Become Lama
        </Link>
        <Link to="/" className="item">
          <i className="heart outline icon" />
        </Link>
        <Link to="/" className="item">
          <i className="cart icon" />
        </Link>
        <Link to="/" className="item">
          <i className="user outline icon" />
        </Link>
      </div>
    </div>
  );
};



export default Header;