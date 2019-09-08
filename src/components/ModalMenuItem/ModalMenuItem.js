import React, { Component } from 'react';

import './ModalMenuItem.css';

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
        <a className="modal-menu-item-label" style={{ color: this.props.colour }}>
          {this.props.label}
        </a>
      </div>
    );
  }

}

export default ModalMenuItem;