import React, {PropTypes} from 'react';

const TodoItem = ({onClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <label><input type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onClick} />{text}</label>
  </li>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;
