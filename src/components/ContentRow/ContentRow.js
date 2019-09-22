import React, { Component } from 'react';

import './ContentRow.css';

class ContentRow extends Component {

  render() {
    return (
      <div className="content-row">
        {this.props.elements}
      </div>
    );
  }

}

export default ContentRow;