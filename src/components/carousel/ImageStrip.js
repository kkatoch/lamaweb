import React, { Component } from "react";
import {Grid, Image} from "semantic-ui-react";
import './ImageStrip.css'

export default class ImageStrip extends Component {
  render() {
    return (
      <div className="ui container">
        <h1 style={{ textAlign: "center" }}>Companies which love Lama</h1>
        <Grid centered>
          <Grid.Row columns={6}>
            <Grid.Column>
              <Image src="http://rimansi.org/wp-content/uploads/2018/04/citilogo.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://cdn.worldvectorlogo.com/logos/barclays-3.svg" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://logos-download.com/wp-content/uploads/2016/04/Hitachi_logo_logotype_black.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://www.hrone.lu/sites/hrone/files/2016-09/deloitte_3.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://seomofo.com/logos/google-logo.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://seekvectorlogo.net/wp-content/uploads/2018/07/bank-of-england-vector-logo.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}