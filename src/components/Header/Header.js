import React, { Component } from 'react';
import moment from 'moment';
import './Header.css';

import Logo from '../Logo';

// Header bar across the top of the page, with the title logo and any additional information.
class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Logo />
        </div>
      </div>
    );
  }

}

export default Header;