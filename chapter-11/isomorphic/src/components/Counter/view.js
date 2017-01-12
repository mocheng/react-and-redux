import React, { PropTypes } from 'react';
import * as Actions from './actions.js';
import {connect} from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

export const stateKey = 'counter';

function Counter({caption, onIncrement, onDecrement, value}) {
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    value: (state[stateKey] && state[stateKey][ownProps.caption]) || 0
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

