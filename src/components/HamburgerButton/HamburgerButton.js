import React, { Component } from 'react';
import './HamburgerButton.css';

class HamburgerButton extends Component {

  render() {
    if (this.props.menu) {
      return (
        <div className="hamburger-container" onClick={this.props.onButtonClicked}>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </div>
      );
    } else if (this.props.close) {
      return (
        <div className="hamburger-container" onClick={this.props.onButtonClicked}>
          <div className="hamburger-cross-1"></div>
          <div className="hamburger-cross-2"></div>
        </div>
      )
    }
  }
}

export default HamburgerButton;