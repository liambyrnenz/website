import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Main.css';

import { Banner, Footer, Header } from '../../components';
import { Home, ModalMenu, ContentPage } from '../../pages';

const data = require("../../resources/main.json")

// Main frame for entire SPA. Pages are swapped in and out with a constant header and footer
// (and any banners.)
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { modalOnScreen: false };
  }

  // Load banners from the associated data file and construct the components needed.
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

  // Create, populate and return the router switch used for navigation.
  // The home page is always added in and additional pages are loaded from the main data file.
  createRouter() {
    var routes = [];

    if (data.pages) {
      for (var i = 0; i < data.pages.length; i++) {
        let page = data.pages[i];

        routes.push(
          <Route path={page.path} render={() => <ContentPage content={page.path.substring(1)} />} />
        )
      }
    }

    return <Switch>
      <Route exact path="/" component={Home} />
      {routes}
    </Switch>;
  }

  // Load the main content visible on screen. This is either the modal menu
  // or actual content rendered depending on the current route.
  getMainContent() {
    if (this.state.modalOnScreen) {
      return <ModalMenu onItemClicked={() => this.toggleModalMenu()} />;
    }
    return this.createRouter();
  }

  toggleModalMenu() {
    this.setState({ modalOnScreen: !this.state.modalOnScreen });
  }

  render() {
    return (
      <BrowserRouter>
        <Header hidingLogo={this.state.modalOnScreen}
          menuButton={!this.state.modalOnScreen}
          closeButton={this.state.modalOnScreen}
          onMenuClicked={() => this.toggleModalMenu()} />
        {this.getBanners()}
        {this.getMainContent()}
        <Footer />
      </BrowserRouter>
    );
  }

}

export default Main;
