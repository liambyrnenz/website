import React, { Component } from 'react';

import './ContentTile.css';

class ContentTile extends Component {

  render() {
    return (
      <div className="content-tile">
        <p class="content-tile-label-primary">{this.props.primaryLabel}</p>
        <p class="content-tile-label-secondary">{this.props.secondaryLabel}</p>
      </div>
    );
  }

}

export default ContentTile;