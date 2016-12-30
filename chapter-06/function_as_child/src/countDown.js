import React from 'react';

class CountDown extends React.Component {

  constructor() {
    super(...arguments);

    this.state = {count: this.props.startCount};
  }

  componentDidMount() {
    var that = this;
    this.intervalHandle = setInterval(function() {

      const newCount = that.state.count - 1;
      if (newCount >= 0) {
        that.setState({count: newCount});
      } else {
        window.clearInterval(that.intervalHandle);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalHandle) {
      window.clearInterval(this.intervalHandle);
    }
  }

  render() {
    return this.props.children(this.state.count);
  }
}

CountDown.propTypes = {
  children: React.PropTypes.func.isRequired
}

export default CountDown;
