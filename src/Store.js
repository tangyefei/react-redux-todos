import { createStore,combineReducers } from 'redux';
import { reducer as TodoReducer } from './todos/';
import { reducer as FilterReducer } from './filter/';

const reducers = combineReducers({
  todos: TodoReducer,
  filter: FilterReducer
});

export default createStore(reducers, {  
  todos: [{
    id: 1,
    text: '123',
    completed: false
  },{
    id: 2,
    text: '456',
    completed: false
  }]
});