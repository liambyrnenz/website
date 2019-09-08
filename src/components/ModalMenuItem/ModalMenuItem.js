import React, { Component } from 'react';

import './ModalMenuItem.css';

import RightArrowIcon from "../../assets/ic_arrowright.png"

class ModalMenuItem extends Component {

  render() {
    return (
      <div className="modal-menu-item" style={
        {
          animation: "fadein 1s",
          animationDelay: `${0.25 + (this.props.id * 0.1)}s`,
          animationFillMode: "both"
        }
      }>
        <img src={RightArrowIcon} alt="Menu Item Selector" class="modal-menu-item-image"/>
        <div href="/" className="modal-menu-item-label" style={{ color: this.props.colour }}>
          {this.props.label}
        </div>
      </div>
    );
  }

}

export default ModalMenuItem;