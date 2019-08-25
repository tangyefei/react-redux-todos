
export default (state = 'ALL', action) => {
  switch(action.type) {
    case 'SET_FILTER': {
      console.log(action.filter);
      return action.filter
    }
    default: {
      return state
    }
  }
};
  