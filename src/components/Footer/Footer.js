import React, { Component } from 'react';
import './Footer.css';

// Footer for website information.
class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <span className="footer-text">
          Created by Liam Byrne.<br/>
          2021 - v1.1b16
        </span>
      </div>
    );
  }

}

export default Footer;