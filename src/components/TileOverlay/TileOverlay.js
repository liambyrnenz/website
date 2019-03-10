import React, { Component } from 'react';
import './TileOverlay.css';

class TileOverlay extends Component {
  
  render() {
    return (
      <div className="cover" style={{backgroundImage: "url(" + this.props.image + ")"}}>
        {this.props.children}
      </div>
    );
  }

}

export default TileOverlay;