import React, { Component } from 'react';

import { ModalMenuItem } from '../../components';

import './ModalMenu.css';

// Modal menu popover that appears from the Header's HeaderButton component.
class ModalMenu extends Component {

  render() {
    return (
      <div>
        <ModalMenuItem label="Home" colour="" id={0}/>
        <ModalMenuItem label="Experience" colour="#00CCFF" id={1}/>
        <ModalMenuItem label="Education" colour="#00A537" id={2}/>
        <ModalMenuItem label="Projects" colour="#FFBC00" id={3}/>
        <ModalMenuItem label="Volunteering" colour="#FF0000" id={4}/>
      </div>
    );
  }

}

export default ModalMenu;
