import React, { Component } from 'react';
import './HamburgerButton.css';

class HamburgerButton extends Component {

  render() {
    return (
      <div className="hamburger-container">
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </div>
    );
  }

}

export default HamburgerButton;