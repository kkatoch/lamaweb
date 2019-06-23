import React from "react";
import Hero from "../hero/Hero";
import CarouselMultiImage from "../carousel/CarouselMultiImage";
import ImageGrid from "../image/ImageGrid";
import { Divider } from "semantic-ui-react";
import CarouselMultiPlaceholder from "../carousel/CarouselMultiPlaceholder";
import CarouselMultiTestimonial from "../carousel/CarouselMultiTestimonial";
import ImageStrip from "../carousel/ImageStrip";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="ui container">
          <CarouselMultiPlaceholder />
          <Divider />
          <CarouselMultiImage />
          <Divider />
          <ImageGrid />
          <Divider />
          <CarouselMultiTestimonial />
          <Divider />
          <ImageStrip />
          <Divider />
        </div>
      </div>
    );
  }
}


export default Landing;