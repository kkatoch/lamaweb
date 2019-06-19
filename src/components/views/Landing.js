import React from "react";
import Hero from "../hero/Hero";
import CarouselMultiImage from "../carousel/CarouselMultiImage";
import ImageGrid from "../image/ImageGrid";
import { Divider } from "semantic-ui-react";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="ui container">
          <CarouselMultiImage />
          <Divider />
          <ImageGrid />
          <Divider />
        </div>
      </div>
    );
  }
}

export default Landing;