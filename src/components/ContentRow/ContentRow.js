import React, { Component } from 'react';

import './ContentRow.css';

class ContentRow extends Component {

  wrappedElements(elements) {
    var newElements = []
    for (var i = 0; i < elements.length; i++) {
      newElements.push(<div className="content-element">{elements[i]}</div>)
    }
    return newElements
  }

  render() {
    return (
      <div className="content-row">
        {this.wrappedElements(this.props.elements)}
      </div>
    );
  }

}

export default ContentRow;