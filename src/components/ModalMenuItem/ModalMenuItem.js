import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './ModalMenuItem.css';

import RightArrowIcon from "../../assets/ic_arrowright.png"

class ModalMenuItem extends Component {

  getImage() {
    if (this.props.route === "/") {
      return <img src={RightArrowIcon} alt="Menu Item Selector" class="modal-menu-item-image" />
    } else {
      return <div class="modal-menu-item-image" />
    }
  }

  render() {
    return (
      <NavLink to="/" onClick={() => this.props.onItemClicked()}>
        <div className="modal-menu-item" style={
          {
            animation: "fadein 1s",
            animationDelay: `${0.25 + (this.props.id * 0.1)}s`,
            animationFillMode: "both"
          }
        }>
          {this.getImage()}
          <div href="/" className="modal-menu-item-label" style={{ color: this.props.colour }}>
            {this.props.label}
          </div>
        </div>
      </NavLink>
    );
  }

}

export default ModalMenuItem;