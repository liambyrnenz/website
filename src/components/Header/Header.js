import React, { Component } from 'react';

import HamburgerButton from '../HamburgerButton';
import Logo from '../Logo';

import './Header.css';

// Header bar across the top of the page, with the title logo and any additional information.
class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Logo />
        </div>
        <HamburgerButton />
      </div>
    );
  }

}

export default Header;