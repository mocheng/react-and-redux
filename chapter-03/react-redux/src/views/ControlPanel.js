import React, { Component, PropTypes } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    const store = this.context.store;
    const state = store.getState();

    return (
      <div style={style}>
        {
          Object.keys(state).map(key => <Counter caption={key} key={key} />)
        }
        <hr/>
        <Summary />
      </div>
    );
  }
}

ControlPanel.contextTypes = {
  store: PropTypes.object
}

export default ControlPanel;

