let nextTodoId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  completed: false,
  id: nextTodoId ++,
  text: text
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id: id
});



