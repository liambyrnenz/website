import React, { Component } from 'react';

import './ContentHeading.css';

class ContentHeading extends Component {

  render() {
    return (
      <div>
        <p class="content-heading">{this.props.heading}</p>
      </div>
    )
  }

}

export default ContentHeading;