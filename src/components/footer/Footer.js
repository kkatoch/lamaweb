import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="ui inverted vertical footer segment footer-custom">
            <div className="ui center aligned container">
                <div className="ui stackable inverted divided grid">
                    <div className="three wide column">
                        <h4 className="ui inverted header">Group 1</h4>
                        <div className="ui inverted link list">
                            <Link className="item">Link One</Link>
                            <Link className="item">Link Two</Link>
                            <Link className="item">Link Three</Link>
                            <Link className="item">Link Four</Link>
                        </div>
                    </div>
                    <div className="three wide column">
                        <h4 className="ui inverted header">Group 2</h4>
                        <div className="ui inverted link list">
                            <Link className="item">Link One</Link>
                            <Link className="item">Link Two</Link>
                            <Link className="item">Link Three</Link>
                            <Link className="item">Link Four</Link>
                        </div>
                    </div>
                    <div className="three wide column">
                        <h4 className="ui inverted header">Group 3</h4>
                        <div className="ui inverted link list">
                            <Link className="item">Link One</Link>
                            <Link className="item">Link Two</Link>
                            <Link className="item">Link Three</Link>
                            <Link className="item">Link Four</Link>
                        </div>
                    </div>
                    <div className="seven wide column">
                        <h4 className="ui inverted header">Footer Header</h4>
                        <p>
                            Extra space for a call to action inside the footer that could help
                            re-engage users.
                        </p>
                    </div>
                </div>
                <div className="ui inverted section divider"></div>
                <div className="item">
                    <i className="copyright outline icon" />
                    2019 Lama Art
                </div>
                <div className="ui horizontal inverted small divided link list">
                    <Link className="item">Site Map</Link>
                    <Link className="item">Contact Us</Link>
                    <Link className="item">Terms and Conditions</Link>
                    <Link className="item">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;