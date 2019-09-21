import React, { Component } from 'react';
import Markdown from 'react-markdown';

import './ContentPhotoText.css';

class ContentPhotoText extends Component {

  render() {
    let image = require(`../../assets/${this.props.image}`)
    return (
      <div className="content-phototext-container">
        <div className="content-phototext-photo" style={
          {
            backgroundImage: `url(${image})`,
            backgroundSize: `${this.props.croppingOff ? "contain" : "cover"}`
          }
        }>
        </div>
        <div className="content-phototext-text">
          <div className="content-phototext-title">
            {this.props.title}
          </div>
          <div className="content-phototext-description">
            <Markdown source={this.props.description} />
          </div>
        </div>
      </div>
    );
  }

}

export default ContentPhotoText;