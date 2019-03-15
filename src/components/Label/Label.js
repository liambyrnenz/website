import React, { Component } from 'react';
import './Label.css';

class Label extends Component {

  render() {
    return (
      <div className={this.props.type + "text"}>
        {this.props.text}
      </div>
    );
  }

}

export default Label;