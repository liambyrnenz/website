import React, { Component } from 'react';

import './ContentPage.css';

class ContentPage extends Component {

  getContentBlocks(content) {
    var contentBlocks = [];
    for (var i = 0; i < content.content.length; i++) {
      contentBlocks.push(
        <p class="content">
          {content.content[i]}
        </p>
      )
    }
    return contentBlocks;
  }

  render() {
    if (!this.props.content) {
      return null;
    }

    let content = require("../../resources/" + this.props.content + ".json");
    return (
      <div>
        <p class="title">{content.title}</p>
       {this.getContentBlocks(content)}
      </div>
    );
  }

}

export default ContentPage;
