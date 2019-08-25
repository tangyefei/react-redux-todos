import React from 'react';
import {connect} from 'react-redux';
import { removeTodo } from '../actions.js';

const TodoList = ({todos, onRemoveTodo}) => {
  return (<ul className="todo-list">
    {
      todos.map(d => {
        return <li key={d.id}>{d.text}&nbsp;<i onClick={() => {onRemoveTodo(d.id)}}>X</i></li>
      })
    }
  </ul>)
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    todos: (() => {
      switch(state.filter) {
        case 'ALL':
          return state.todos;
        case 'COMPLETED':
          return state.todos.filter(d => d.completed == true);
        case 'NOT_COMPLETED':
          return state.todos.filter(d => d.completed == false);
      }
    })()
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);