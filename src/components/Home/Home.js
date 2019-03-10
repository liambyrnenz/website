import React, { Component } from 'react';
import './Home.css';

import { Header } from '../Header';
import { Tile } from '../Tile';
import { TileOverlay } from '../TileOverlay';
import { TileContainer } from '../TileContainer';
import { Label } from '../Label';
import { Grid } from '../Grid';

class Home extends Component {

  getTiles() {
    var tiles = [];
    for (var i = 1; i <= 10; i++) {
      tiles.push(<TileContainer style={
        {
          animation: 'fadein 1s',
          animationDelay: `${0.5 + (0.1 * i)}s`,
          animationFillMode: 'both'
        }
      }>
        <Tile>
          <TileOverlay/>
          <Label type="quote" text="Long winded review that should wrap lines." bg="black" fg="white" />
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
