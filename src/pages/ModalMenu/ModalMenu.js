import React, { Component } from 'react';

import { ModalMenuItem } from '../../components';

import './ModalMenu.css';

// Modal menu popover that appears from the Header's HeaderButton component.
class ModalMenu extends Component {

  render() {
    return (
      <div>
        <ModalMenuItem id={0} route="/" label="Home" colour="" onItemClicked={() => this.props.onItemClicked()}/>
        <ModalMenuItem id={1} route="/" label="Experience" colour="#00CCFF" onItemClicked={() => this.props.onItemClicked()}/>
        <ModalMenuItem id={2} route="/" label="Education" colour="#00A537" onItemClicked={() => this.props.onItemClicked()}/>
        <ModalMenuItem id={3} route="/" label="Projects" colour="#FFBC00" onItemClicked={() => this.props.onItemClicked()}/>
        <ModalMenuItem id={4} route="/" label="Volunteering" colour="#FF0000" onItemClicked={() => this.props.onItemClicked()}/>
      </div>
    );
  }

}

export default ModalMenu;
