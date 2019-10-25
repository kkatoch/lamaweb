import React from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../../actions";
import {Card, Flag, Grid, Icon, Image} from "semantic-ui-react";
import "../image/ImageGrid.css";
import "../image/ImageGridDetailed.css";
import {Link} from "react-router-dom";

class Catalog extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderList() {
        return this.props.products.map(product => {
            return (
                <Grid.Column mobile={16} tablet={8} computer={4} key={product.id}>
                    <Card>
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
                            //onClick={()=>this.props.selectProduct(product)}
                        />

                        <Card.Content>
                            <Card.Header className="align-left">
                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </Card.Header>
                            <Card.Meta className="align-right price-format">
                                £{product.price}
                            </Card.Meta>
                            <div className="details-format">
                                <Card.Meta className="align-left">{product.artStyle}</Card.Meta>
                                <Card.Meta className="align-right lease-format">
                                    Lease from ${product.rentalPrice}/m
                                </Card.Meta>
                                <br/>
                                <Card.Meta>
                                    {product.width} W X {product.height} H in
                                </Card.Meta>
                            </div>

                            <Card.Meta className="name-format">
                                <Link to={`/artist/${product.seller.id}`}>
                                    <Flag name="au" style={{marginRight: "5px"}}/>
                                    {product.seller.fullName}
                                </Link>
                            </Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            );
        });
    }

    render() {
        if (!this.props.products) {
            return <div>Loading...</div>;
        }
        return (
            <div className="ui container">
                <div className="ui container grid-holder">
                    <h1 className="header-title">Discover</h1>
                    <h5 className="header-details" style={{textAlign: "center"}}>
                        Discover our fine art photography for sale or rent online at Lama
                        Art. We select, you choose. We’re curators – that means we use our
                        expertise to find great art, great artists. Our online selection of
                        photographs features a wide range of colour and black & white
                        photography and photo collages.
                    </h5>
                    <Grid centered>{this.renderList()}</Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {products: Object.values(state.products)};
};

export default connect(mapStateToProps, {fetchProducts})(Catalog);