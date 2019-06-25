import React, { Component } from "react";
import { Card, Flag, Grid, Icon, Image} from "semantic-ui-react";
import "./ImageGrid.css";
import "./ImageGridDetailed.css";

export default class ImageGridDetailed extends Component {
  render() {
    return (
      <div className="ui container grid-holder">
        <h1 className="header-title">Discover</h1>
        <h5 className="header-details" style={{ textAlign: "center" }}>
          Discover our fine art photography for sale or rent online at Lama Art.
          We select, you choose. We’re curators – that means we use our
          expertise to find great art, great artists. Our online selection of
          photographs features a wide range of colour and black & white
          photography and photo collages.
        </h5>

        <Grid centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />

              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>{" "}
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>{" "}
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>{" "}
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>{" "}
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                size="medium"
                wrapped
                ui={false}
              />
              <Icon
                className="icon-image-left"
                size="large"
                name="heart"
                circular
                inverted
                color="green"
              />
              <Icon
                className="icon-image-right"
                size="large"
                name="cart"
                circular
                inverted
                color="blue"
              />
              <Card.Content>
                <Card.Header className="align-left">Hide and Seek</Card.Header>
                <Card.Meta className="align-right price-format">
                  $5000
                </Card.Meta>
                <div className="details-format">
                  <Card.Meta className="align-left">Contemporary</Card.Meta>
                  <Card.Meta className="align-right lease-format">
                    Lease from $45/m
                  </Card.Meta>
                  <br />
                  <Card.Meta>30 W X 45 H X 3 in</Card.Meta>
                </div>

                <Card.Meta className="name-format">
                  <Flag name="au" style={{ "margin-right": "5px" }} />
                  Jenny Boot
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}