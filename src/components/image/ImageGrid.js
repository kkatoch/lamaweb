import React, { Component } from "react";
import { Card, Grid, Icon, Image, Placeholder } from "semantic-ui-react";
import "./ImageGrid.css";

export default class ImageGrid extends Component {
  render() {
    return (
      <div className="ui container image-wrapper">
        <h1 style={{ textAlign: "center" }}>Trending</h1>
        <Grid centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image
                    src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                    size="medium"
                    rounded
                  />
                  <Icon
                    className="icon-image"
                    color="pink"
                    size="large"
                    name="heart"
                  />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image
                      src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      size="medium"
                      rounded
                  />
                  <Icon
                      className="icon-image"
                      color="pink"
                      size="large"
                      name="heart"
                  />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image
                      src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      size="medium"
                      rounded
                  />
                  <Icon
                      className="icon-image"
                      color="pink"
                      size="large"
                      name="heart"
                  />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image
                      src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      size="medium"
                      rounded
                  />
                  <Icon
                      className="icon-image"
                      color="pink"
                      size="large"
                      name="heart"
                  />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image
                      src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      size="medium"
                      rounded
                  />
                  <Icon
                      className="icon-image"
                      color="pink"
                      size="large"
                      name="heart"
                  />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image
                      src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      size="medium"
                      rounded
                  />
                  <Icon
                      className="icon-image"
                      color="pink"
                      size="large"
                      name="heart"
                  />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image
                      src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      size="medium"
                      rounded
                  />
                  <Icon
                      className="icon-image"
                      color="pink"
                      size="large"
                      name="heart"
                  />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Card.Content>
                <Placeholder>
                  <Image
                      src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      size="medium"
                      rounded
                  />
                  <Icon
                      className="icon-image"
                      color="pink"
                      size="large"
                      name="heart"
                  />
                </Placeholder>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}