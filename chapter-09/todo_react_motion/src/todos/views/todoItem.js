import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions.js';

class TodoItem extends React.Component {
  constructor() {
    super(...arguments);

    console.log('enter TodoItem constructor: ' + this.props.text);
  }

  render() {
    const {style, onClick, completed, text } = this.props;

    console.log('enter TodoItem render: ' + text);

    return (
      <li
        style={{
          ...style,
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <label><input type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onClick} />{text}</label>
      </li>
    );
  };
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch(toggleTodo(ownProps.id));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);

