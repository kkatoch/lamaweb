import React from "react";
import Hero from "../hero/Hero";
import CarouselMultiTestimonial from "../carousel/CarouselMultiTestimonial";
import ImageStrip from "../carousel/ImageStrip";
import {connect} from "react-redux";
import {fetchProducts, fetchSellers} from "../../actions";
import Slider from "react-slick";
import {Card, Grid, Icon, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Landing extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchSellers();
    }

    renderHighlights() {
        if (this.props.fetchProducts) {
            return this.props.products.map(product => {
                return (
                    <div className="item placeholder" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <Card centered>
                                <Image
                                    src={product.images[0].mediumUrl}
                                    size="medium"
                                    wrapped
                                    ui={false}
                                    centered
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
                );
            });
        }
    }

    renderSpotlights() {
        if (this.props.fetchSellers) {
            return this.props.sellers.map(seller => {
                return (
                    <div className="item" key={seller.id}>
                        <Link to={`/sellers/${seller.id}`}>
                            <Card
                                image={seller.images[0].mediumUrl}
                                header={seller.name}
                                meta="Contemporary"
                                description={seller.description}
                                centered
                            />
                        </Link>
                    </div>
                );
            });
        }
    }

    renderTrending() {
        if (this.props.fetchProducts) {
            return this.props.products.map(product => {
                return (
                    <Grid.Column mobile={16} tablet={8} computer={4} key={`${product.id}`}>
                        <Link to={`/products/${product.id}`}>
                            <Card centered>
                                <Image
                                    src={product.images[0].mediumUrl}
                                    size="medium"
                                    wrapped
                                    ui={false}
                                    centered
                                />

                                <Icon
                                    className="icon-image-left"
                                    size="large"
                                    name="heart"
                                    color="pink"
                                />
                            </Card>
                        </Link>
                    </Grid.Column>
                );
            });
        }
    }

    render() {
        const settings = {
            arrows: false,
            dots: true,
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
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
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
        return (
            <div>
                <Hero/>
                <div className="ui container">
                    <div className="ui container carousel-multi-image">
                        <h1 style={{textAlign: "center"}}>Product Highlights</h1>
                        <h5 style={{textAlign: "center"}}>Discover our range of art works</h5>
                        <Slider {...settings}>
                            {this.renderHighlights()}
                        </Slider>
                    </div>
                    <div className="ui container carousel-multi-image">
                        <h1 style={{"textAlign": "center"}}>Artists Spotlight</h1>
                        <h5 style={{textAlign: "center"}}>Discover our range of artists</h5>
                        <Slider {...settings}>
                            {this.renderSpotlights()}
                        </Slider>
                    </div>
                    <div className="ui container image-wrapper">
                        <h1 style={{textAlign: "center"}}>Trending</h1>
                        <h5 style={{textAlign: "center"}}>Discover our range of artists</h5>
                        <Grid centered>
                            {this.renderTrending()}
                        </Grid>
                    </div>
                    <CarouselMultiTestimonial/>
                    <ImageStrip/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {products: Object.values(state.products), sellers: Object.values(state.sellers)};
};

export default connect(
    mapStateToProps,
    {fetchProducts, fetchSellers}
)(Landing);