import React, { Component } from "react";
import Slider from "react-slick";
import "./CarouselMultiImage.css";
import "./CarouselMultiPlaceholder.css";
import { Card, Icon } from "semantic-ui-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CarouselMultiPlaceholder extends Component {
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
        <h1 style={{ textAlign: "center" }}>Product Highlights</h1>
        <h5 style={{ textAlign: "center" }}>Discover our range of art works</h5>
        <Slider {...settings}>
          <div className="item placeholder">
            <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
            <Icon className="icon-image" color="pink" size="large" name="heart" />
          </div>
          <div className="item placeholder">
            <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
            <Icon className="icon-image" color="pink" size="large" name="heart" />
          </div>
          <div className="item placeholder">
            <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
            <Icon className="icon-image" color="pink" size="large" name="heart" />
          </div>
          <div className="item placeholder">
            <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
            <Icon className="icon-image" color="pink" size="large" name="heart" />
          </div>
          <div className="item placeholder">
            <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
            <Icon className="icon-image" color="pink" size="large" name="heart" />
          </div>
          <div className="item placeholder">
            <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
            <Icon className="icon-image" color="pink" size="large" name="heart" />
          </div>
          <div className="item placeholder">
            <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
            <Icon className="icon-image" color="pink" size="large" name="heart" />
          </div>
          <div className="item placeholder">
            <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
            <Icon className="icon-image" color="pink" size="large" name="heart" />
          </div>
        </Slider>
      </div>
    );
  }
}