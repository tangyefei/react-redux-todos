import { createStore } from 'redux';
import { reducer as TodoReducer } from './todos/';

createStore(TodoReducer, {
  list: [{
    id: 1,
    text: '123',
    completed: false
  }]
});