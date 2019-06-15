import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment footer-custom">
      <div className="ui center aligned container">
        <div className="ui stackable inverted divided grid">
          <div className="three wide column">
            <h4 className="ui inverted header">About Us</h4>
            <div className="ui inverted link list">
              <Link className="item item-footer">Our Strategy</Link>
              <Link className="item item-footer">Mission</Link>
              <Link className="item item-footer">Values</Link>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Customer Services</h4>
            <div className="ui inverted link list">
              <Link className="item item-footer">FAQs</Link>
              <Link className="item item-footer">Contact Us</Link>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Become Lama</h4>
            <div className="ui inverted link list">
              <Link className="item item-footer">Lease</Link>
              <Link className="item item-footer">Sell</Link>
            </div>
          </div>
          <div className="seven wide column">
            <h5 className="ui inverted header">Follow Lama</h5>
            <i className="facebook icon large" />
            <i className="instagram icon large" />
            <i className="pinterest square icon large" />
            <i className="twitter square icon large" />
            <i className="youtube icon large" />
            <h5 className="ui inverted header">Pay Securely With</h5>
            <i className="cc visa icon large" />
            <i className="cc paypal icon large" />
            <i className="cc mastercard icon large" />
            <i className="cc amex icon large" />
          </div>
        </div>
        <div className="ui inverted section divider"></div>
        <div className="item copyright">
          <i className="copyright outline icon" />
          Lama Art 2019. All rights reserved.
        </div>
        <div className="ui horizontal inverted small divided link list">
          <Link className="item item-footer">Contact Us</Link>
          <Link className="item item-footer">Terms and Conditions</Link>
          <Link className="item item-footer">Privacy Policy</Link>
          <Link className="item item-footer">Security Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
