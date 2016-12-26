import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {toggleTodo} from '../actions.js';

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

const mapStateToProps = (state) => {
  return {
    todos: state.todos
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

