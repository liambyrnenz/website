import React, { Component } from 'react';
import './Home.css';

import TileService from "../../services/TileService";

import { Header, Tile, TileOverlay, TileContainer, Label, Grid } from '../../components';

class Home extends Component {

  getTiles() {
    var tiles = [];
    let images = TileService.imagesInOrder();
    let text = TileService.textInOrder();

    for (var i = 0; i < images.length; i++) {
      tiles.push(<TileContainer style={
        {
          animation: 'fadein 1s',
          animationDelay: `${0.5 + (0.1 * (i + 1))}s`,
          animationFillMode: 'both'
        }
      }>
        <Tile link="/">
          <TileOverlay image={images[i]}/>
          <Label type="quote" text={text[i]} bg="black" fg="white" />
          {/* <Label type="stamp" text="Timestamp!" bg="black" fg="white" /> */}
        </Tile>
      </TileContainer>
      );
    }
    return tiles;
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          {this.getTiles()}
        </Grid>
      </div>
    );
  }

}

export default Home;
