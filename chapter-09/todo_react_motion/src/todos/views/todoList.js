import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {FilterTypes} from '../../constants.js';

import {spring, TransitionMotion} from 'react-motion';

const willLeave = () => {
  return {
    height: spring(0),
    opacity: spring(0)
  };
}

const willEnter = () => {
  console.log('#enter willEnter');
  return {
    height: 0,
    opacity: 0
  };
};

const TodoList = ({todos, onClickTodo}) => {
  const styles = todos.map(item => {
    return {
      key: item.id.toString(),
      data: item,
      style: {
        height: spring(60),
        opacity: spring(1)
      }
    };
  });

  return (
    <TransitionMotion
      willLeave={willLeave}
      willEnter={willEnter}
      styles={styles}
    >
      {
        interpolatedStyles =>
        <ul className="todo-list">
          {
            interpolatedStyles.map(config => {
              const {data, style, key} = config;

              console.log('#key', key);
              console.log('#style', style);

              const item = data;
              return (<TodoItem
                style={style}
                key={key}
                id={item.id}
                text={item.text}
                completed={item.completed}
              />);
            })
          }
        </ul>
        }
      </TransitionMotion>
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
