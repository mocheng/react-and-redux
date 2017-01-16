import React from 'react';
import {mount} from 'enzyme';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import {reducer as todosReducer, actions} from '../../../src/todos/index.js';
import {reducer as filterReducer} from '../../../src/filter/index.js';
import {FilterTypes} from '../../../src/constants.js';
import TodoList from '../../../src/todos/views/todoList.js';
import TodoItem from '../../../src/todos/views/todoItem.js';

describe('todos', () => {
  it('should add new todo-item on addTodo action', () => {
    const store = createStore(
      combineReducers({
        todos: todosReducer,
        filter: filterReducer
      }), {
        todos: [],
        filter: FilterTypes.ALL
      });
    const subject = (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    const wrapper = mount(subject);

    store.dispatch(actions.addTodo('write more test'));

    expect(wrapper.find('.text').text()).toEqual('write more test');
  });

});
