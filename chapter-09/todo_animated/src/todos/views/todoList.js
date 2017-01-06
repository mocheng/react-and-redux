import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {FilterTypes} from '../../constants.js';

import TransitionGroup from 'react-addons-css-transition-group';
import './todoItem.css';

const TodoList = ({todos, onClickTodo}) => {
  return (
    <ul>
      <TransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={200}>
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
        ))
    }
      </TransitionGroup>
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
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
    todos: selectVisibleTodos(state.todos, state.filter)
  };
}

export default connect(mapStateToProps)(TodoList);
