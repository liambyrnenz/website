import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Home.css';

import { Grid, Label, Tile, TileContainer, TileOverlay } from '../../components';
import { PageTest } from '../../pages';

import TileHelper from '../../utils/TileHelper';

const data = require("../../resources/home.json")

// Home page with tile grid
class Home extends Component {

  getTiles() {
    var tiles = [];

    for (var i = 0; i < data.tiles.length; i++) {
      let tile = data.tiles[i];
      tiles.push(

        <TileContainer style={
          {
            animation: 'fadein 1s',
            animationDelay: `${0.5 + (0.1 * (i + 1))}s`,
            animationFillMode: 'both'
          }
        }>
          <Tile>
            <TileOverlay image={tile.image_name} />
            <Label type="title" text={tile.title} />
            <Label type="primary" text={
              TileHelper.linkify(tile.text, tile.links)
            } />
          </Tile>
        </TileContainer>

      );
    }
    return tiles;
  }

  render() {
    return (
      <div>
        <Grid>
          {this.getTiles()}
        </Grid>
        <p><NavLink to="/pagetest">Test</NavLink></p>
        <Route exact path="/" Component={Home} />
        <Route path="/pagetest" component={PageTest} />
      </div>
    );
  }

}

export default Home;
