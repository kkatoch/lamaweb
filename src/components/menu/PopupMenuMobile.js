import React from "react";
import { Dropdown, Grid, Icon, Popup } from "semantic-ui-react";
import "./PopupMenu.css";
import "../header/Header.css";

class PopupMenuMobile extends React.Component {
  render() {
    return (
      <Dropdown item icon="sidebar" simple>
        <Dropdown.Menu className="mobile-popup">
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">Browse</span>
            <Dropdown.Menu>
              <Dropdown.Item>Categories</Dropdown.Item>
              <Dropdown.Item>Size</Dropdown.Item>
              <Dropdown.Item>Budget</Dropdown.Item>
              <Dropdown.Item>Medium</Dropdown.Item>
              <Dropdown.Item>Style</Dropdown.Item>
              <Dropdown.Item>Colour</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="text">Blog</span>
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="text">Become Lama</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}


export default PopupMenuMobile;