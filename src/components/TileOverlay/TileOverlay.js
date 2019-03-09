import React, { Component } from 'react';
import './TileOverlay.css';

// TODO: Import all images here
import Image from "../../assets/example.png"

class TileOverlay extends Component {

  render() {
    return (
      <div className="cover" style={{backgroundImage: "url(" + Image + ")"}}>
        {this.props.children}
      </div>
    );
  }

}

export default TileOverlay;