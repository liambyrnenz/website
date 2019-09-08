import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ModalMenuItem } from '../../components';

import './ModalMenu.css';

// Modal menu popover that appears from the Header's HeaderButton component.
class ModalMenu extends Component {

  render() {
    return (
      <div>
        <ModalMenuItem label="Home" colour="" id={0}/>
        <ModalMenuItem label="Experience" colour="" id={1}/>
        <ModalMenuItem label="Education" colour="" id={2}/>
        <ModalMenuItem label="Projects" colour="" id={3}/>
        <ModalMenuItem label="Volunteering" colour="" id={4}/>
      </div>
    );
  }

}

export default ModalMenu;
