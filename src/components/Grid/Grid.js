import React, { Component } from 'react';
import './Grid.css';

// Container component that simply collects children into a flexbox.
class Grid extends Component {

  render() {
    return (
      <div className="grid">
        {this.props.children}
      </div>
    );
  }

}

export default Grid;