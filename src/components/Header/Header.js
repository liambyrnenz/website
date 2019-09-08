import React, { Component } from 'react';

import HamburgerButton from '../HamburgerButton';
import Logo from '../Logo';

import './Header.css';

// Header bar across the top of the page, with the title logo and any additional information.
class Header extends Component {

  getLogo() {
    return (
      <div className="header-logo">
        {this.props.showingLogo ? <Logo /> : undefined}
      </div>
    )
  }

  render() {
    return (
      <div className="header">
        {this.getLogo()}
        <HamburgerButton onButtonClicked={() => this.props.onMenuClicked()} />
      </div>
    );
  }

}

export default Header;