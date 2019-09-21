import React, { Component } from 'react';

import './ContentCenteredHeading.css';

class ContentCenteredHeading extends Component {

  render() {
    let icon = ""
    if (this.props.icon) {
      icon = require(`../../assets/${this.props.icon}`)
    }
    return (
      <div className="content-cent-heading-container" style={
        {
          backgroundColor: `${this.props.backgroundColour}`
        }
      }>
        <img src={icon} className="content-cent-heading-icon" />
        <div className="content-cent-heading-heading">
          {this.props.heading}
        </div>
        <div className="content-cent-heading-subheading">
          {this.props.subheading}
        </div>
      </div>
    );
  }

}

export default ContentCenteredHeading;