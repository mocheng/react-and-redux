import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

import store from '../store.js';
import * as Actions from '../Actions.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    const state = store.getState();

    return (
      <div style={style}>
        {
          Object.keys(state).map(function(key) {
            return (
              <Counter caption={key} key={key} value={state[key]}
                onIncrement={ () => store.dispatch(Actions.increment(key)) }
                onDecrement={ () => store.dispatch(Actions.decrement(key)) }
              />
            );
          })
        }
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;

