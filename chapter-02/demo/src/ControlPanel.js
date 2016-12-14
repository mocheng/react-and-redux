import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {

  render() {
    return (
      <div style={style}>
        <Counter caption="First" foo/>
        <Counter caption="Second" initValue={10} />
        <Counter caption="Third" initValue={20} />
      </div>
    );
  }
}

export default ControlPanel;

