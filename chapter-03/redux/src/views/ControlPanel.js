import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

import * as Actions from '../Actions.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    const {store} = this.props;
    const state = store.getState();

    let sum = 0;

    const counterComponents = Object.keys(state).map(function(key) {
      sum += state[key];
      return (
        <Counter caption={key} key={key} value={state[key]}
          onIncrement={ () => store.dispatch(Actions.increment(key)) }
          onDecrement={ () => store.dispatch(Actions.decrement(key)) }
        />
      );
    });

    return (
      <div style={style}>
        { counterComponents }
        <hr/>
        <Summary value={sum} />
      </div>
    );
  }
}

export default ControlPanel;

