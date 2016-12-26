import React from 'react';
import {view as TodoList} from './todos/';
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
