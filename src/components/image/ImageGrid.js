import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

export default class ImageGrid extends Component {
  render() {
    return (
      <div className="ui container">
          <h1 style={{ "textAlign": "center" }}>Trending</h1>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg" />
          </Grid.Column>{" "}
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Image src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg" />
          </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg" />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Image src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg" />
            </Grid.Column>
        </Grid>
      </div>
    );
  }
}