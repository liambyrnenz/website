import React, { Component } from 'react';
import './Label.css';

// White-on-black label used in tiles.
class Label extends Component {

  render() {
    return (
      <div className={"logo-" + this.props.type + " logo-text"}>
        {this.props.text}
      </div>
    );
  }

}

export default Label;