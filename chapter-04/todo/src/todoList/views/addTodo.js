import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import actions from '../actions.js';

class AddTodo extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();

    const input = this.input;
    if (!input.value.trim()) {
      return;
    }

    this.props.onAdd(input.value);
    input.value = '';
  }

  refInput(node) {
    this.input = node;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={this.refInput} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(actions.addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);

