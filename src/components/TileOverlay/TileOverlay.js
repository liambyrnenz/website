import React, { Component } from 'react';
import './TileOverlay.css';

// Tile that lays on top of the Tile component.
// It is contained inside of the Tile's children so that it can respond to its size
// and is absolutely positioned directly on top of it.
class TileOverlay extends Component {
  
  render() {
    let image = require("../../assets/" + this.props.image)
    return (
      <div className="cover" style={{backgroundImage: "url(" + image + ")"}}>
        {this.props.children}
      </div>
    );
  }

}

export default TileOverlay;