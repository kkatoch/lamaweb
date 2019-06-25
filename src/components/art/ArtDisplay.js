import React, { Component } from "react";
import { Image, Item } from "semantic-ui-react";
import "./ArtDisplay.css";

export default class ArtDisplay extends Component {
  render() {
    return (
      <div className="grid-art">
        <Item.Group className="item-wrapper">
          <Item>
            <Item.Image
              size="large"
              src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
            />

            <Item.Content className="item-details" verticalAlign='middle'>
              <Item.Header as="a">Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}
