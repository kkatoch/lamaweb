import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions";
import { Button, Card, Flag, Icon, Item, Popup, Tab } from "semantic-ui-react";
import "./ArtDisplay.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import Slider from "react-slick/lib";

class Product extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProduct(id);
  }

  render() {
    if (!this.props.product) {
      return <div>Loading...</div>;
    }
    const {
      name,
      description,
      artStyle,
      height,
      width,
      depth,
      price,
      rentalPrice,
      seller
    } = this.props.product;
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
        render: () => <Tab.Pane attached="top">{description}</Tab.Pane>
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
      <div className="ui container">
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
                <h2>{this.props.product.name}</h2>
                <h3 className="artist-name">
                  <Flag name="au" style={{ marginRight: "5px" }} />
                  {seller.fullName}
                </h3>
                <Item.Meta className="align-left art-size-type">
                  {artStyle}
                  <Popup
                    content="Artwork physical size measured as height by width by depth. Artwork purchased with a frame will usually be 5cm (2.5in) longer in each dimension."
                    trigger={<Icon name="question circle" />}
                    header="Art Type"
                    size="tiny"
                    key="1"
                  />
                </Item.Meta>
                <Item.Meta className="align-right art-size-type">
                  {width} W X {height} H in
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
                <h3 className="align-left price-text">£{price}</h3>
                <h3 className="align-right price-text">
                  Lease from £{rentalPrice}/month
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
            <h5 style={{ textAlign: "center" }}>
              Discover our range of art works
            </h5>
            <Slider {...settings}>
              <div className="item placeholder">
                <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
                <Icon
                  className="icon-image"
                  color="pink"
                  size="large"
                  name="heart"
                />
              </div>
              <div className="item placeholder">
                <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
                <Icon
                  className="icon-image"
                  color="pink"
                  size="large"
                  name="heart"
                />
              </div>
              <div className="item placeholder">
                <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
                <Icon
                  className="icon-image"
                  color="pink"
                  size="large"
                  name="heart"
                />
              </div>
              <div className="item placeholder">
                <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
                <Icon
                  className="icon-image"
                  color="pink"
                  size="large"
                  name="heart"
                />
              </div>
              <div className="item placeholder">
                <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
                <Icon
                  className="icon-image"
                  color="pink"
                  size="large"
                  name="heart"
                />
              </div>
              <div className="item placeholder">
                <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
                <Icon
                  className="icon-image"
                  color="pink"
                  size="large"
                  name="heart"
                />
              </div>
              <div className="item placeholder">
                <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
                <Icon
                  className="icon-image"
                  color="pink"
                  size="large"
                  name="heart"
                />
              </div>
              <div className="item placeholder">
                <Card image="https://cdn-ep19.pressidium.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/07/posing-people-posing.jpg.webp" />
                <Icon
                  className="icon-image"
                  color="pink"
                  size="large"
                  name="heart"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { product: state.products[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchProduct }
)(Product);