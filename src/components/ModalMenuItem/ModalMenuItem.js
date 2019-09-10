import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './ModalMenuItem.css';

import RightArrowIcon from "../../assets/ic_arrowright.png"

class ModalMenuItem extends Component {

  render() {
    return (
      <NavLink exact to={this.props.route} className="modal-menu-item-navlink" activeClassName="modal-menu-item-active" onClick={() => this.props.onItemClicked()}>
        <div className="modal-menu-item" style={
          {
            animation: "fadein 1s",
            animationDelay: `${0.25 + (this.props.id * 0.1)}s`,
            animationFillMode: "both"
          }
        }>
          <img src={RightArrowIcon} alt="Menu Item Selector" class="modal-menu-item-image" />
          <div href="/" className="modal-menu-item-label" style={{ color: this.props.colour }}>
            {this.props.label}
          </div>
        </div>
      </NavLink>
    );
  }

}

export default ModalMenuItem;