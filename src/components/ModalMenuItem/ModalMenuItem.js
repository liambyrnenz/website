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
        <div className="modal-menu-item-label">
          {this.props.label}
        </div>
      </div>
    );
  }

}

export default ModalMenuItem;