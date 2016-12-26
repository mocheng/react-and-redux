import React, { Component } from 'react';
import {view as TodoList} from './todoList/';
import {view as Filter} from './filter/';

function TodoApp() {
  return (
    <div>
      <TodoList />
      <Filter />
    </div>
  );
}

export default TodoApp;
