import React from "react";
import "./Hero.css";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <Carousel
        autoplay={true}
        transitionMode="scroll"
        renderTopCenterControls={({ currentSlide }) => (
          <div>Slide: {currentSlide}</div>
        )}
        renderCenterLeftControls={({ previousSlide }) => (
          <Link className="slider-button" onClick={previousSlide}>
            <i className="chevron left large icon" />{" "}
          </Link>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Link className="slider-button" onClick={nextSlide}>
            <i className="chevron right large icon" />
          </Link>
        )}
      >
        <img
          className="hero-image"
          alt="hero"
          src="https://images.unsplash.com/photo-1478428036186-d435e23988ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
        />
        <img
          className="hero-image"
          alt="hero"
          src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
        />
        <img
          className="hero-image"
          alt="hero"
          src="https://cdn.pixabay.com/photo/2017/08/04/10/36/background-2579719_960_720.jpg"
        />
      </Carousel>
    );
  }
}

export default Hero;
