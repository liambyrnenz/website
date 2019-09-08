import React, { Component } from 'react';
import './HeaderButton.css';

class HeaderButton extends Component {

  render() {
    if (this.props.menu) {
      return (
        <div className="hamburger-container" onClick={this.props.onButtonClicked}>
          <div className="hamburger-bar" id="hamburger-bar-1"></div>
          <div className="hamburger-bar" id="hamburger-bar-2"></div>
          <div className="hamburger-bar" id="hamburger-bar-3"></div>
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

export default HeaderButton;