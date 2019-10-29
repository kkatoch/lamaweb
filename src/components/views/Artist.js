import React from "react";
import "./Artist.css";
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductsBySellerId, fetchSeller } from "../../actions";

class Artist extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSeller(id);
    this.props.fetchProductsBySellerId(id);
  }

  renderList() {
    if (!this.props.products) {
      return <div>Loading...</div>;
    }
    console.log(this.props.products)
    return this.props.products.map(product => {
      return (
        <div className="col-md-4" key={`${product.id}-artist`}>
          <Link to={`/products/${product.id}`}>
            <Image src={product.images[0].mediumUrl} size="medium" wrapped ui={false} centered />
            <Icon
              className="icon-image-left"
              size="large"
              name="heart"
              color="pink"
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    if (!this.props.seller) {
      return <div>Loading...</div>;
    }
      if (!this.props.products) {
          return <div>Loading...</div>;
      }
    const { fullName, images, description } = this.props.seller;

    const numberOfArtworks = this.props.products.length;
    return (
      <div className="container">
        <header>
          <i className="fa fa-bars" aria-hidden="true" />
        </header>
        <main>
          <div className="row">
            <div className="left col-lg-4">
              <div className="photo-left">
                <img
                  alt={`${fullName}-profile`}
                  className="photo"
                  src={images[0].mediumUrl}
                />
                <div className="active" />
              </div>
              <h4 className="name">{fullName}</h4>
              <p className="info">Artist</p>
              <div className="stats row">
                <div className="stat col-xs-4">
                  <p className="number-stat">{numberOfArtworks}</p>
                  <p className="desc-stat">Artworks</p>
                </div>
                <div className="stat col-xs-4" style={{ paddingLeft: "25px" }}>
                  <p className="number-stat">0</p>
                  <p className="desc-stat">Sales</p>
                </div>
                <div className="stat col-xs-4" style={{ paddingLeft: "25px" }}>
                  <p className="number-stat">0</p>
                  <p className="desc-stat">Rented</p>
                </div>
              </div>
              <p className="desc">{description}</p>
              <div className="social">
                <i className="fa fa-facebook-square" aria-hidden="true" />
                <i className="fa fa-twitter-square" aria-hidden="true" />
                <i className="fa fa-pinterest-square" aria-hidden="true" />
                <i className="fa fa-tumblr-square" aria-hidden="true" />
              </div>
            </div>
            <div className="right col-lg-8">
              <div className="row gallery">{this.renderList()}</div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: Object.values(state.products),
    seller: state.sellers[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {fetchSeller,fetchProductsBySellerId})(Artist);
