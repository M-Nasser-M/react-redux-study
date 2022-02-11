import { actionTypes } from "../reducers/CounterReducer";

const counterAdd = () => {
  return { type: actionTypes.ADD };
};

const counterSub = () => {
  return { type: actionTypes.SUB };
};

const counterReset = () => {
  return { type: actionTypes.RESET };
};

export { counterAdd, counterSub, counterReset };
