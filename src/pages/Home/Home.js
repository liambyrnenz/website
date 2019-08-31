import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import './Home.css';

import { Banner, Footer, Grid, Header, Label, Tile, TileContainer, TileOverlay } from '../../components';
import { PageTest } from '../../pages';

import TileService from '../../services/TileService';

const data = require("../../resources/home.json")

// Home page with tile grid
class Home extends Component {

  getBanners() {
    var banners = [];
    if (!data.banners) return banners;

    for (var i = 0; i < data.banners.length; i++) {
      let banner = data.banners[i];

      banners.push(
        <Banner text={banner.text} colour={banner.colour} />
      )
    }

    return banners;
  }

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
              TileService.linkify(tile.text, tile.links)
            } />
          </Tile>
        </TileContainer>

      );
    }
    return tiles;
  }

  loadPage() {

  }

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          {this.getBanners()}
          <Grid>
            {this.getTiles()}
          </Grid>
          <p><NavLink to="/pagetest">Test</NavLink></p>
          <Route exact path="/" Component={Home} />
          <Route path="/pagetest" component={PageTest} />
          <Footer />
        </div>
      </HashRouter>
    );
  }

}

export default Home;
