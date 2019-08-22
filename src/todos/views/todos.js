import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';

class TodosView extends React.Component {
  render() {
    return (<div>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </div>)
  }
}

export default TodosView;