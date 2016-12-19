import React, { Component, PropTypes } from 'react';

class Summary extends Component {

  render() {
    return (
      <div>Total Count: {this.props.value}</div>
    );
  }
}

Summary.PropTypes = {
  value: PropTypes.number.isRequired
};

export default Summary;



