import React, {Component} from "react";
import {Grid, Image} from "semantic-ui-react";
import './ImageStrip.css'
import mongoDbStartupA from '../assets/img/mongoDbStartupA.png'

export default class LogoStrip extends Component {
    render() {
        return (
            <div className="ui container">
                <h1 style={{textAlign: "center"}}>Companies which love Lama</h1>
                <Grid centered>
                    <Grid.Row columns={6}>
                        <Grid.Column>
                            <Image style={{width: "800px!important"}} src={mongoDbStartupA}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}