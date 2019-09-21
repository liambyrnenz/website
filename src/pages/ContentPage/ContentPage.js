import React, { Component } from 'react';

import ContentComponentFactory from '../../utils/ContentComponentFactory';

import './ContentPage.css';

class ContentPage extends Component {

  getContentBlocks(content) {
    var contentBlocks = [];
    for (var i = 0; i < content.content.length; i++) {
      let component = ContentComponentFactory.make(content.content[i]);
      contentBlocks.push(
        <div class="content" style={
          {
            animationDelay: `${0.75 + (0.1 * i)}s`
          }
        }>
          {component}
        </div>
      )
    }
    return contentBlocks;
  }

  render() {
    if (!this.props.content) {
      return null;
    }

    let content = require(`../../resources/${this.props.content}.json`);
    return (
      <div>
        <p class="title">{content.title}</p>
        {this.getContentBlocks(content)}
      </div>
    );
  }

}

export default ContentPage;
