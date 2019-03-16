import React, { Component } from 'react';
import './Banner.css';

// Full width banner for showing important information.
class Banner extends Component {

  render() {
    return (
      <div className="banner" style={{ backgroundColor: this.props.colour }}>
        <span className="banner-text">
          {this.props.text}
        </span>
      </div>
    );
  }

}

export default Banner;