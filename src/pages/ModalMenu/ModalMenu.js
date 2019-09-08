import React, { Component } from 'react';

import { ModalMenuItem } from '../../components';

import './ModalMenu.css';

// Modal menu popover that appears from the Header's HeaderButton component.
class ModalMenu extends Component {

  render() {
    return (
      <div>
        <ModalMenuItem id={0} label="Home" colour="" active={true} onItemClicked={() => this.props.onItemClicked()}/>
        <ModalMenuItem id={1} label="Experience" colour="#00CCFF" active={true} onItemClicked={() => this.props.onItemClicked()}/>
        <ModalMenuItem id={2} label="Education" colour="#00A537" active={true} onItemClicked={() => this.props.onItemClicked()}/>
        <ModalMenuItem id={3} label="Projects" colour="#FFBC00" active={true} onItemClicked={() => this.props.onItemClicked()}/>
        <ModalMenuItem id={4} label="Volunteering" colour="#FF0000" active={true} onItemClicked={() => this.props.onItemClicked()}/>
      </div>
    );
  }

}

export default ModalMenu;
