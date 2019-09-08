import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {

  render() {
    return (
      <div className={"text-container " + (this.props.hidden ? "invisible" : "visible")}>
        <p className="heading">Liam Byrne</p>
        <p className="subheading">JUNIOR SOFTWARE ENGINEER</p>
      </div>
    );
  }

}

export default Logo;
