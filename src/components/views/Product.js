import React from "react";
import {connect} from "react-redux";
import {fetchProduct, fetchProducts} from "../../actions";
import {Button, Card, Flag, Header, Icon, Image, Item, Popup, Tab} from "semantic-ui-react";
import "./ArtDisplay.css";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBView} from "mdbreact";
import Slider from "react-slick/lib";
import {Link} from "react-router-dom";

class Product extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchProduct(id);
        this.props.fetchProducts();
    }

    renderProducts() {
        if (this.props.fetchProducts) {
            return this.props.products.map(product => {
                return (
                    <div className="item placeholder" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <Card>
                                <Image
                                    src={product.images[0].mediumUrl}
                                    size="medium"
                                    wrapped
                                    ui={false}
                                />

                                <Icon
                                    className="icon-image-left"
                                    size="large"
                                    name="heart"
                                    color="pink"
                                />
                            </Card>
                        </Link>
                    </div>
                )
            });
        }
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
            price,
            rentalPrice,
            seller,
            inspiration,
            artMedium,
            artCategory,
            createdYear
        } = this.props.product;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToScroll: 1,
                        swipeToSlide: true,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 4,
                    }
                }
            ]
        };
        const panes = [
            {
                menuItem: "Description",
                render: () => <Tab.Pane attached="top">{description}</Tab.Pane>
            },
            {
                menuItem: "Details",
                render: () => <Tab.Pane attached="top">
                    <div>
                        <Header sub>Art Category</Header>
                        <span>{artCategory}</span>
                        <Header sub>Inspiration</Header>
                        <span>{inspiration}</span>
                        <Header sub>Art Medium</Header>
                        <span>{artMedium}</span>
                        <Header sub>Created Year</Header>
                        <span>{createdYear}</span>
                    </div>
                </Tab.Pane>
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
                                <h2>{name}</h2>
                                <h3 className="artist-name">
                                    <Flag name="au" style={{marginRight: "5px"}}/>
                                    <Link to={`/artist/${seller.id}`}>
                                        {seller.fullName}
                                    </Link>
                                </h3>
                                <Item.Meta className="align-left art-size-type">
                                    {artStyle}
                                    <Popup
                                        content="Artwork physical size measured as height by width by depth. Artwork purchased with a frame will usually be 5cm (2.5in) longer in each dimension."
                                        trigger={<Icon name="question circle"/>}
                                        header="Art Type"
                                        size="tiny"
                                        key="1"
                                    />
                                </Item.Meta>
                                <Item.Meta className="align-right art-size-type">
                                    {width} W X {height} H in
                                    <Popup
                                        content="Artwork physical size measured as height by width by depth. Artwork purchased with a frame will usually be 5cm (2.5in) longer in each dimension."
                                        trigger={<Icon name="question circle"/>}
                                        header="Art Size"
                                        key="2"
                                        size="tiny"
                                    />
                                </Item.Meta>
                                <br/>
                                <br/>
                                <br/>
                                <Tab panes={panes}/>
                                <h3 className="align-left price-text">£{price}</h3>
                                <h3 className="align-right price-text">
                                    Lease from £{rentalPrice}/month
                                    <Popup
                                        content="Artwork physical size measured as height by width by depth. Artwork purchased with a frame will usually be 5cm (2.5in) longer in each dimension."
                                        trigger={<Icon name="question circle"/>}
                                        header="Leasing with Lama"
                                        size="tiny"
                                        key="3"
                                    />
                                </h3>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Button fluid floated="left" color="blue">
                                    <Icon name="cart"/>
                                    ADD TO CART
                                </Button>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    <div className="ui container carousel-multi-image">
                        <h1 style={{textAlign: "center"}}>You Might Also Like</h1>
                        <h5 style={{textAlign: "center"}}>
                            Discover our range of art works
                        </h5>
                        <Slider {...settings}>
                            {this.renderProducts()}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {product: state.products[ownProps.match.params.id], products: Object.values(state.products)};
};

export default connect(
    mapStateToProps,
    {fetchProduct, fetchProducts}
)(Product);