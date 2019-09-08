import React, { Component } from 'react';
import './HeaderButton.css';

class HeaderButton extends Component {

  getContainerClassName() {
    if (this.props.menu) {
      return "hamburger-container";
    } else if (this.props.close) {
      return "hamburger-container hamburger-container-padded";
    }
  }

  getBarClassName(id) {
    if (this.props.menu) {
      return "hamburger-bar";
    } else if (this.props.close) {
      if (id === 1) {
        return "hamburger-cross-1";
      } else if (id === 3) {
        return "hamburger-cross-2";
      }
    }
  }

  render() {
    return (
      <div className={this.getContainerClassName()} onClick={this.props.onButtonClicked}>
        <div className={this.getBarClassName(1)}></div>
        <div className={this.getBarClassName(2)}></div>
        <div className={this.getBarClassName(3)}></div>
      </div>
    );
  }

}

export default HeaderButton;