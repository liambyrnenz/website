import React, { Component } from 'react';
import './Label.css';

// White-on-black label used in tiles.
class Label extends Component {

  render() {
    return (
      <div className={this.props.type + " text"}>
        {this.props.text}
      </div>
    );
  }

}

export default Label;