import React from "react";
import "./Carousel.css";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";

class CarouselImage extends React.Component {
  render() {
    return (
      <Carousel
        autoplay={true}
        transitionMode="fade"
        renderCenterLeftControls={({ previousSlide }) => (
          <Link to={""} className="slider-button" onClick={previousSlide}>
            <i className="chevron left large icon" />{" "}
          </Link>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Link to={""}  className="slider-button" onClick={nextSlide}>
            <i className="chevron right large icon" />
          </Link>
        )}
      >
        <img
          className="carousel-image"
          alt="hero"
          src="https://images.unsplash.com/photo-1478428036186-d435e23988ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
        />
        <img
          className="carousel-image"
          alt="hero"
          src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
        />
        <img
          className="carousel-image"
          alt="hero"
          src="https://cdn.pixabay.com/photo/2017/08/04/10/36/background-2579719_960_720.jpg"
        />
      </Carousel>


    );
  }
}

export default CarouselImage;
