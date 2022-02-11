const initialState = 0;
const actionTypes = {
  ADD: "ADD",
  SUB: "SUB",
  RESET: "RESET",
};
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return state + 1;
    case actionTypes.SUB:
      return state - 1;
    case actionTypes.RESET:
      return 0;
    default:
      return state;
  }
};

export { CounterReducer, actionTypes };
