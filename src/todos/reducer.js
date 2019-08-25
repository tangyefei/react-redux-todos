
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state 
      ]
    }

    case 'REMOVE_TODO': {
      return state.filter((todoItem) => {
        return todoItem.id !== action.id;
      })
    }

    default: {
      return state
    }
  }
};
  