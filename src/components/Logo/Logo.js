import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Logo.css';

class Logo extends Component {

  render() {
    return (
      <Link to="/" className="logo-link">
        <div className={"text-container " + (this.props.hidden ? "invisible" : "visible")}>
          <p className="heading">Liam Byrne</p>
          <p className="subheading">JUNIOR SOFTWARE ENGINEER</p>
        </div>
      </Link>
    );
  }

}

export default Logo;
