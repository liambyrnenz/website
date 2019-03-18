import React, { Component } from 'react';
import './Footer.css';

// Footer for website information.
class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <span className="footer-text">
          Created from scratch by Liam Byrne.<br/>
          2019 - b1.0.8
        </span>
      </div>
    );
  }

}

export default Footer;