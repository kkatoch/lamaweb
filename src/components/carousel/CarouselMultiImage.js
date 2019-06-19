import React, { Component } from "react";
import Slider from "react-slick";
import "./CarouselMultiImage.css";
import { Card } from "semantic-ui-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CarouselMultiImage extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };
    return (
      <div className="ui container carousel-multi-image">
        <h1 style={{ "textAlign": "center" }}>Artists Spotlight</h1>
        <Slider {...settings}>
          <div className="item">
            <Card
              image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp"
              header="Nawaz"
              meta="Contemporary"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </div>
          <div className="item">
            <Card
              image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-limbs.jpg.webp"
              header="Kureshi"
              meta="Modern"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </div>
          <div className="item">
            <Card
              image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp"
              header="Nawaz"
              meta="Contemporary"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </div>
          <div className="item">
            <Card
              image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-limbs.jpg.webp"
              header="Kureshi"
              meta="Modern"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </div>
          <div className="item">
            <Card
              image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp"
              header="Nawaz"
              meta="Contemporary"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </div>
          <div className="item">
            <Card
              image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-limbs.jpg.webp"
              header="Kureshi"
              meta="Modern"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </div>
        </Slider>
      </div>
    );
  }
}