import React, { Component } from 'react';

import './ContentPhotoText.css';

class ContentPhotoText extends Component {

  render() {
    let image = require(`../../assets/${this.props.image}`)
    return (
      <div className="content-phototext-container">
        <div className="content-phototext-photo" style={
          {
            backgroundImage: `url(${image})`
          }
        }>
        </div>
        <div className="content-phototext-text">
          {this.props.text}
        </div>
      </div>
    );
  }

}

export default ContentPhotoText;