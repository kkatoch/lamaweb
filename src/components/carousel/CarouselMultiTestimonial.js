import React, { Component } from "react";
import Slider from "react-slick";
import "./CarouselMultiImage.css";
import { Icon, Image, Placeholder } from "semantic-ui-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselMultiTestimonial.css";

export default class CarouselMultiTestimonial extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1

    };
    return (
      <div className="ui container carousel-multi-image">
        <h1 style={{ textAlign: "center" }}>What People Say About Lama</h1>
        <Slider {...settings}>
          <Placeholder>
            <Image
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
              size="small"
              centered
              circular
            />
            <Placeholder.Paragraph>
              <Icon color="pink" size="large" name="quote left" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus
              eveniet molestias voluptatum inventore laboriosam labore sit,
              aspernatur praesentium iste impedit quidem dolor veniam.
              <Icon color="pink" size="large" name="quote right" />
            </Placeholder.Paragraph>
            <h4 className="text-title">Anna Deynah</h4>
            <h5 className="text-title">Founder at ET Company</h5>
          </Placeholder>
          <Placeholder>
            <Image
                src="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-limbs.jpg.webp"
                size="small"
                centered
                circular
            />
            <Placeholder.Paragraph>
              <Icon color="pink" size="large" name="quote left" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
              id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus
              eveniet molestias voluptatum inventore laboriosam labore sit,
              aspernatur praesentium iste impedit quidem dolor veniam.
              <Icon color="pink" size="large" name="quote right" />
            </Placeholder.Paragraph>
            <h4 className="text-title">Anna Deynah</h4>
            <h5 className="text-title">Founder at ET Company</h5>
          </Placeholder>
        </Slider>
      </div>
    );
  }
}