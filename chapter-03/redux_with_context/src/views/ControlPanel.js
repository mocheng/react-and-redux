import React, { Component, PropTypes } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

import store from '../Store.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {

  getChildContext() {
    return {
      store: store
    };
  }

  render() {
    return (
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr/>
        <Summary />
      </div>
    );
  }
}

ControlPanel.childContextTypes = {
  store: PropTypes.object
};

export default ControlPanel;

