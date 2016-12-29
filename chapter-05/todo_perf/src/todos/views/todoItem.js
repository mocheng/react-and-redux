import React, {PropTypes} from 'react';


class TodoItem extends React.Component {
  constructor() {
    super(...arguments);

    console.log('enter TodoItem constructor: ' + this.props.text);
  }

  render() {
    const {onClick, completed, text } = this.props;

    console.log('enter TodoItem render: ' + text);

    return (
      <li
        style={{
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
  text: PropTypes.string.isRequired
}

export default TodoItem;
