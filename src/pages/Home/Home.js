import React, { Component } from 'react';
import './Home.css';

import TileService from "../../services/TileService";

import { Header, Tile, TileOverlay, TileContainer, Label, Grid } from '../../components';

class Home extends Component {

  getTiles() {
    var tiles = [];
    let images = TileService.imagesInOrder(),
        text = TileService.textInOrder(),
        titles = TileService.titlesInOrder();

    for (var i = 0; i < images.length; i++) {
      tiles.push(
      
      <TileContainer style={
        {
          animation: 'fadein 1s',
          animationDelay: `${0.5 + (0.1 * (i + 1))}s`,
          animationFillMode: 'both'
        }
      }>
        <Tile>
          <TileOverlay image={images[i]}/>
          <Label type="title" text={titles[i]} />
          <Label type="primary" text={text[i]} />
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
