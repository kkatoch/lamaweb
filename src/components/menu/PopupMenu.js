import React from "react";
import { Link } from "react-router-dom";
import {Grid, Popup} from "semantic-ui-react";
import "./PopupMenu.css";

class PopupMenu extends React.Component {
  render() {
    return (
        <Popup wide trigger={<Link to="/discover" className="item header-item">Discover</Link>} flowing hoverable className='link item popup-container'>
            <Grid relaxed divided columns={2} className="popup-wrapper">
                <Grid.Column>
                    <h4 className="ui header">Categories</h4>
                    <div className="ui link list">
                        <Link to="/discover" className="item">Fine Art</Link>
                        <Link to="/discover" className="item">Contemporary</Link>
                        <Link to="/discover" className="item">European</Link>
                        <Link to="/discover" className="item">Ethnic</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <h4 className="ui header">Size</h4>
                    <div className="ui link list">
                        <Link to="/discover" className="item">Small</Link>
                        <Link to="/discover" className="item">Medium</Link>
                        <Link to="/discover" className="item">Large</Link>
                        <Link to="/discover" className="item">Plus Sizes</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <h4 className="ui header">Budget</h4>
                    <div className="ui link list">
                        <Link to="/discover" className="item">1k</Link>
                        <Link to="/discover" className="item">5k</Link>
                        <Link to="/discover" className="item">2m</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <h4 className="ui header">Region</h4>
                    <div className="ui link list">
                        <Link to="/discover" className="item">Europe</Link>
                        <Link to="/discover" className="item">Asia</Link>
                        <Link to="/discover" className="item">NAM</Link>
                        <Link to="/discover" className="item">UAE</Link>
                    </div>
                </Grid.Column>
            </Grid>
        </Popup>
    );
  }
}

export default PopupMenu;