import React from "react";
import Carousel from "../carousel/CarouselImage";
import "./Hero.css";
import Typing from "./Typing";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-overlay typewriter">
          <h1>
            Lama <i className="heart icon" />
            <Typing text={["Artists", "Corporate environment"]} />
          </h1>
          <div className="button-hero">
            <div className="button-left">
              <button className="ui secondary large button">Discover</button>
            </div>
            <div className="button-right">
              <button className="ui secondary large button">Get Started</button>
            </div>
          </div>
        </div>

        <Carousel className="hero-carousel" />
      </div>
    );
  }
}

export default Hero;