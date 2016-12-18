import React, { Component, PropTypes } from 'react';

import * as Actions from '../Actions.js';
import CounterStore from '../stores/CounterStore.js';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: CounterStore.counterValues[props.caption]
    }

    CounterStore.on('changed', () => {
      this.setState({count: CounterStore.counterValues[this.props.caption]});
    });

  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  onClickIncrementButton() {
    Actions.increment(this.props.caption);
  }

  onClickDecrementButton() {
    Actions.decrement(this.props.caption);
  }

  render() {
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
};

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f //什么都不做的函数
};

export default Counter;

