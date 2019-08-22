import React from 'react';
import {view as Todos} from './todos/';
import {view as Filter} from './filter/';

class TodoApp extends React.Component {
  render() {
    return (<div>
      <Todos></Todos>
      <Filter></Filter>
    </div>)
  }
}

export default TodoApp;