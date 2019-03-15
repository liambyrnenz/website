import React, { Component } from 'react';
import './Tile.css';

const DEFAULT_SIZE = 256;

class Tile extends Component {

  constructor(props) {
    super(props);
    this.state = { size: DEFAULT_SIZE }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ size: window.innerWidth - DEFAULT_SIZE });
  }

  sizeOfColumn() {
    if (window.innerWidth > 1280) {
      return DEFAULT_SIZE;
    }
    if (window.innerWidth > 720) {
      return this.state.size / 4;
    }
    if (window.innerWidth > 580) {
      return this.state.size / 3;
    }
    if (window.innerWidth > 480) {
      return this.state.size / 2;
    }
    return DEFAULT_SIZE
  }

  render() {
    let size = this.sizeOfColumn()
    return (
      <div className="tile" style={{ width: size + 'px', height: size + 'px' }}>
        {this.props.children}
      </div>
    );
  }

}

export default Tile;