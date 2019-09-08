import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components';

import './ModalMenu.css';

// Modal menu popover that appears from the Header's HamburgerButton component.
class ModalMenu extends Component {

  render() {
    return (
      <div>
        <Header showingLogo={false} onMenuClicked={() => this.props.onCloseClicked()} />
      </div>
    );
  }

}

export default ModalMenu;
