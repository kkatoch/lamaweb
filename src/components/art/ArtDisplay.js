import React, { Component } from "react";
import {
  Button, Card,
  Divider,
  Flag,
  Icon,
  Item,
  Popup,
  Tab
} from "semantic-ui-react";
import "./ArtDisplay.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import Slider from "react-slick/lib";

export default class ArtDisplay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };
    const panes = [
      {
        menuItem: "Description",
        render: () => (
          <Tab.Pane attached="top">
            Male sexuality is undoubtedly one of the most important themes in my
            art. I am inspired by a sensually opened mouth, a dreamy eyes, a
            gentle neck bend, a careless forelock, a bashful color in cheeks ...
            Sexuality and nature are the wild pagan forces. You can't understand
            the sexuality because you can't understand the nature. However, you
            can use it to discover the deepest and most forbidden things about
            yourself. And this investigation seems like the falling in a rabbit
            hole. You'll not get any particular things, but it will be very
            impressive experience. And I hope that somebody who looking at my
            works feels the implication to something unbelievable that cannot be
            banned.
          </Tab.Pane>
        )
      },
      {
        menuItem: "Details",
        render: () => <Tab.Pane attached="top">Tab 3 Content</Tab.Pane>
      },
      {
        menuItem: "Artist",
        render: () => (
          <Tab.Pane attached="top">
            {" "}
            Adam Sandlers was born in 1985 in Ukraine, one of the biggest Soviet
            Republics. After graduating from The Prydniprovska State Academy of
            Civil Engineering and Architecture in 2012, he was working in the
            sphere of architecture and design. But he was disappointed in the
            chosen field. So in 2016 he quit to become an artist.
          </Tab.Pane>
        )
      },
      {
        menuItem: "Inspiration",
        render: () => <Tab.Pane attached="top">Tab 3 Content</Tab.Pane>
      },
      {
        menuItem: "History",
        render: () => <Tab.Pane attached="top">Tab 3 Content</Tab.Pane>
      }
    ];
    return (
      <div className="grid-art">
        <Item.Group>
          <Item>
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={2}
                showControls={true}
                showIndicators={false}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <Item.Image
                        size="big"
                        src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <Item.Image
                        size="big"
                        src="https://cdn.notonthehighstreet.com/fs/40/a2/fdb3-678a-41d4-9d4d-8f5a315c0ac5/original_red-and-blue-abstract-paintings-on-cotton-canvas-set.jpg"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>

            <Item.Content className="item-details">
              <h2>To Discuss</h2>
              <h3 className="artist-name">
                <Flag name="au" style={{ marginRight: "5px" }} />
                Adam Sandlers
              </h3>
              <Item.Meta className="align-left art-size-type">
                Contemporary
                <Popup
                  content="Artwork physical size measured as height by width by depth. Artwork purchased with a frame will usually be 5cm (2.5in) longer in each dimension."
                  trigger={<Icon name="question circle" />}
                  header="Art Type"
                  size="tiny"
                  key="1"
                />
              </Item.Meta>
              <Item.Meta className="align-right art-size-type">
                30 W X 45 H X 3 in
                <Popup
                  content="Artwork physical size measured as height by width by depth. Artwork purchased with a frame will usually be 5cm (2.5in) longer in each dimension."
                  trigger={<Icon name="question circle" />}
                  header="Art Size"
                  key="2"
                  size="tiny"
                />
              </Item.Meta>
              <br />
              <br />
              <br />
              <Tab panes={panes} />
              <h3 className="align-left price-text">£ 150, 000</h3>
              <h3 className="align-right price-text">
                Lease from £150/month
                <Popup
                  content="Artwork physical size measured as height by width by depth. Artwork purchased with a frame will usually be 5cm (2.5in) longer in each dimension."
                  trigger={<Icon name="question circle" />}
                  header="Leasing with Lama"
                  size="tiny"
                  key="3"
                />
              </h3>
              <br />
              <br />
              <br />
              <br />
              <Button fluid floated="left" color="blue">
                <Icon name="cart" />
                ADD TO CART
              </Button>
            </Item.Content>
          </Item>
        </Item.Group>
        <div className="ui container carousel-multi-image">
          <h1 style={{ textAlign: "center" }}>You Might Also Like</h1>
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
      </div>
    );
  }
}
