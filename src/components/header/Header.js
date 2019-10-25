import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import PopupMenu from "../menu/PopupMenu";
import { Icon } from "semantic-ui-react";
import PopupMenuMobile from "../menu/PopupMenuMobile";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutMode: this.getLayoutMode()
    };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    this.setState({
      layoutMode: this.getLayoutMode()
    });
  }

  getLayoutMode() {
    return window.innerWidth > 750 ? "desktop" : "mobile";
  }

  renderDesktopNav() {
    return (
      <div className="ui fixed menu header-wrapper">
        <div className="ui container header-item-container">
          <Link to="/" className="left menu logo-item">
            lamaArt
          </Link>

          <div className="right menu header-right">
            <PopupMenu name="Browse" />
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
              <i className="user outline icon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  renderMobileNav() {
    return (
      <div className="ui fixed menu header-wrapper">
        <div className="ui container header-item-container">
          <Link to="/" className="menu logo-item-mobile">
            lamaArt
          </Link>

          <div className="right menu">
            <Link to="/" className="item header-item">
              <i className="heart outline icon" />
            </Link>
            <Link to="/" className="item header-item">
              <i className="user outline icon" />
            </Link>
          </div>
          <div className="left-menu-sidebar-mobile">
            <PopupMenuMobile />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.layoutMode === "desktop"
      ? this.renderDesktopNav()
      : this.renderMobileNav();
  }
};


export default Header;