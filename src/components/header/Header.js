import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import PopupMenu from "../menu/PopupMenu";

class Header extends React.Component {
  render() {
    return (
      <div className="ui fixed menu header-wrapper">
        <div className="ui container header-item-container">
          <Link to="/" className="left menu logo-item">
            lamaArt
          </Link>

          <div className="right menu header-right">
            <PopupMenu name="Discover" />
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
  }
};



export default Header;