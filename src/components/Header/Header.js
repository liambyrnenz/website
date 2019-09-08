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
          <Logo hidden={this.props.hidingLogo}/>
        </div>
        <HamburgerButton menu={this.props.menuButton} close={this.props.closeButton} onButtonClicked={() => this.props.onMenuClicked()} />
      </div>
    );
  }

}

export default Header;