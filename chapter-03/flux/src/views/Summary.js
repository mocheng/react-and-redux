import React, { Component } from 'react';

import SummaryStore from '../stores/SummaryStore.js';

class Summary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sum: SummaryStore.summary
    }

    SummaryStore.on('changed', () => {
      this.setState({
        sum: SummaryStore.summary
      })
    })

  }

  render() {
    return (
      <div>Total Count: {this.state.sum}</div>
    );
  }
}

export default Summary;



