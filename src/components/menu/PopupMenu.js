import React from "react";
import { Link } from "react-router-dom";
import {Grid, Popup} from "semantic-ui-react";
import "./PopupMenu.css";

class PopupMenu extends React.Component {
  render() {
    return (
        <Popup wide trigger={<Link to="/" className="item header-item">Discover</Link>} flowing hoverable className='link item popup-container'>
            <Grid relaxed divided columns={2} className="popup-wrapper">
                <Grid.Column>
                    <h4 className="ui header">Categories</h4>
                    <div className="ui link list">
                        <Link to="/" className="item">Fine Art</Link>
                        <Link to="/" className="item">Contemporary</Link>
                        <Link to="/" className="item">European</Link>
                        <Link to="/" className="item">Ethnic</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <h4 className="ui header">Size</h4>
                    <div className="ui link list">
                        <Link to="/" className="item">Small</Link>
                        <Link to="/" className="item">Medium</Link>
                        <Link to="/" className="item">Large</Link>
                        <Link to="/" className="item">Plus Sizes</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <h4 className="ui header">Budget</h4>
                    <div className="ui link list">
                        <Link to="/" className="item">1k</Link>
                        <Link to="/" className="item">5k</Link>
                        <Link to="/" className="item">2m</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <h4 className="ui header">Region</h4>
                    <div className="ui link list">
                        <Link to="/" className="item">Europe</Link>
                        <Link to="/" className="item">Asia</Link>
                        <Link to="/" className="item">NAM</Link>
                        <Link to="/" className="item">UAE</Link>
                    </div>
                </Grid.Column>
            </Grid>
        </Popup>
    );
  }
}

export default PopupMenu;