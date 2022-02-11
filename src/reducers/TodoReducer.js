const actionTypes = {
  ADD_TODO: "ADD_TODO",
  INIT_TODO: "INIT_TODO",
};

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.INIT_TODO:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { TodoReducer, actionTypes };
