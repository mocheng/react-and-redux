import React from 'react';
import {mount} from 'enzyme';
import {createStore, combineReducers} from 'redux';

import {reducer as todosReducer, actions} from '../../../src/todos/index.js';
import {reducer as filterReducer} from '../../../src/filter/index.js';
import {FilterTypes} from '../../../src/constants.js';
import TodoList from '../../../src/todos/views/todoList.js';
import TodoItem from '../../../src/todos/views/todoItem.js';

describe('todos', () => {
  it('should add new todo item on click add button', () => {
    console.log('#', FilterTypes.ALL);
    const store = createStore(
      combineReducers({
        todos: todosReducer,
        filter: filterReducer
      }), {
        todos: [],
        filter: FilterTypes.ALL
      });
    const subject = <TodoList store={store} />;
    const wrapper = mount(subject);

    store.dispatch(actions.addTodo('test all'));

    console.log('#li', wrapper.find('.todo-item').text());
    console.log('###', wrapper.find('.text').text());
    expect(wrapper.find('.text').text()).toEqual('test all');
  });

});
