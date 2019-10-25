import React from "react";
import Carousel from "../carousel/CarouselImage";
import "./Hero.css";
import Typing from "./Typing";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-overlay typewriter">
          <div className="hero-text">
            Lama <i className="heart icon" />
            <Typing text={["Artists", "Corporate environment"]} />
          </div>
          <div className="button-hero">
            <div className="button-left">
              <Link to={`/products`}>
                <button className="ui secondary large button">Discover</button>
              </Link>
            </div>
          </div>
        </div>

        <Carousel className="hero-carousel" />
      </div>
    );
  }
}

export default Hero;