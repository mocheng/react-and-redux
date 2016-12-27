import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {toggleTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';

const TodoList = ({todos, onClickTodo}) => {
  return (
    <ul>
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onClick={() => onClickTodo(item.id)}
        />
        ))
    }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const selectVisibileTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibileTodos(state.todos, state.filter)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTodo: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

