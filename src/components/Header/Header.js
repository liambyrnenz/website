import React, { Component } from 'react';
import './Header.css';

import { Logo } from '../Logo';

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