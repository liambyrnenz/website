import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

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

  // Load the main content visible on screen. This is either the modal menu
  // or actual content rendered depending on the current route.
  getMainContent() {
    if (this.state.modalOnScreen) {
      return <ModalMenu onItemClicked={() => this.toggleModalMenu()} />;
    }

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/experience" render={() => <ContentPage content="experience" />} />
        <Route path="/education" render={() => <ContentPage content="education" />} />
        <Route path="/projects" render={() => <ContentPage content="projects" />} />
        <Route path="/volunteering" render={() => <ContentPage content="volunteering" />} />
      </Switch>
    );
  }

  toggleModalMenu() {
    this.setState({ modalOnScreen: !this.state.modalOnScreen });
  }

  render() {
    return (
      <HashRouter>
        <Header hidingLogo={this.state.modalOnScreen}
          menuButton={!this.state.modalOnScreen}
          closeButton={this.state.modalOnScreen}
          onMenuClicked={() => this.toggleModalMenu()} />
        {this.getBanners()}
        {this.getMainContent()}
        <Footer />
      </HashRouter>
    );
  }

}

export default Main;
