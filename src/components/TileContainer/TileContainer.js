import React, { Component } from 'react';
import './TileContainer.css';

// Root of the tile hierarchy. Contains the overlay and the tile underneath.
class TileContainer extends Component {

  // To detect taps on mobile, use state to track whether the overlay is
  // being presented or not. On a click or tap, change the CSS class
  // so the overlay is animated away.
  // TODO improve solution (media hover)

  constructor(props) {
    super(props);
    this.state = {
      overlayActive: false
    };
  }

  toggleOverlay() {
    this.setState({ overlayActive: !this.state.overlayActive });
  }

  render() {
    return (
      <div onClick={() => this.toggleOverlay()} className={this.state.overlayActive ? "slide2" : "slide"} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }

}

export default TileContainer;