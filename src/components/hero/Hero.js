import React from "react";
import Carousel from "../carousel/CarouselImage";
import "./Hero.css";
import {Link} from "react-router-dom";

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero-overlay typewriter">
                    <div className="hero-text">
            <span className="hero-highlight">
              "Where Creativity meets Appreciation"
            </span>
                        <div className="qoute-text">
                            -Founders, Lama Art Ltd
                        </div>
                    </div>
                    <div className="button-hero">
                        <div className="button-left">
                            <Link to={`/products`}>
                                <button className="ui secondary large button">Browse</button>
                            </Link>
                            <div className="button-right">
                                <button className="ui secondary large button">
                                    Getting Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Carousel className="hero-carousel"/>
            </div>
        );
    }
}

export default Hero;