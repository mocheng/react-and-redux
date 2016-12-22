import React from 'react';
import * as d3 from 'd3';

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    //console.log(this.props);
    var node  = this.refs.axis;
    var axis;
    if (this.props.orient === 'bottom') {
      axis = d3.axisBottom().ticks(5).scale(this.props.scale);
    } else if (this.props.orient === 'left') {
      axis = d3.axisLeft().ticks(5).scale(this.props.scale);
    }
    //var axis = d3.axis().orient(this.props.orient).ticks(5).scale(this.props.scale);
    d3.select(node).call(axis);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}
