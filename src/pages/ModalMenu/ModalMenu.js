import React, { Component } from 'react';

import { ModalMenuItem } from '../../components';

import './ModalMenu.css';

const data = require("../../resources/main.json")

// Modal menu popover that appears from the Header's HeaderButton component.
class ModalMenu extends Component {

  generateMenuItems() {
    var menuItems = [];
    if (!data.pages) return menuItems;

    for (var i = 0; i < data.pages.length; i++) {
      let page = data.pages[i];

      menuItems.push(
        <ModalMenuItem id={i + 1} route={page.path}
          label={page.title} colour={page.menuColour}
          onItemClicked={() => this.props.onItemClicked()} />
      )
    }

    return menuItems;
  }

  render() {
    return (
      <div>
        <ModalMenuItem id={0} route="/" label="Home" colour="" onItemClicked={() => this.props.onItemClicked()} />
        {this.generateMenuItems()}
      </div>
    );
  }

}

export default ModalMenu;
