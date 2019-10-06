import React, { Component } from 'react';

import './ContentTile.css';

class ContentTile extends Component {

  render() {
    let icon = ""
    if (this.props.icon) {
      icon = require(`../../assets/${this.props.icon}`)
    }
    return (
      <div className="content-tile">
        <img src={icon} alt="Tile Icon" className="content-tile-icon" />
        <p class="content-tile-label-primary">{this.props.primaryLabel}</p>
        <p class="content-tile-label-secondary">{this.props.secondaryLabel}</p>
      </div>
    );
  }

}

export default ContentTile;