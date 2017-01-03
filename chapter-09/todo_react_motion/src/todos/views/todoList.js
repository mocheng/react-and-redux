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

const TodoList = ({todos, onClickTodo}) => {
  const transitionStyles = todos.map(item => ({
    key: item.id.toString(),
    data: item,
    style: {
      height: 30,
      opacity: 1
    }
  }));

  return (
    <TransitionMotion
      willLeave={willLeave}
      styles={transitionStyles}>
      {
        interpolatedStyles =>
        <ul>
          {
            interpolatedStyles.map(config => {
              const {data, style, key} = config;

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

export default connect(mapStateToProps)(TodoList);
