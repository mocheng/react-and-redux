import React, { Component, PropTypes } from 'react';

class Summary extends Component {
  render() {
    const sum = this.props.sum;
    return (
      <div>Total Count: {sum}</div>
    );
  }
}

Summary.propTypes = {
  sum: PropTypes.number.isRequired
};


class SummaryContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = this.context.store.getState();
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
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  render() {
    const sum = this.state.sum;
    return (
      <Summary sum={sum} />
    );
  }
}

SummaryContainer.contextTypes = {
  store: PropTypes.object
}

export default SummaryContainer;

