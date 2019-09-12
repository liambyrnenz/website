import React, { Component } from 'react';

import './ContentPhotoText.css';

class ContentPhotoText extends Component {

  render() {
    let image = require("../../assets/me.png")
    return (
      <div className="content-phototext-container">
        <div className="content-phototext-photo" style={
          {
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }
        }>
        </div>
        <div className="content-phototext-text">
          Text
        </div>
      </div>
    );
  }

}

export default ContentPhotoText;