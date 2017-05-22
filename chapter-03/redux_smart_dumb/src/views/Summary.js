import React, { Component, PropTypes } from 'react';

import store from '../Store.js';

class Summary extends Component {
  render() {
    return (
      <div>Total Count: {this.props.sum}</div>
    );
  }
}

Summary.propTypes = {
  sum: PropTypes.number.isRequired
};


class SummaryContainer extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }

    return { sum: sum };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    return (
      <Summary sum={this.state.sum}></Summary>
    );
  }
}

export default SummaryContainer;
