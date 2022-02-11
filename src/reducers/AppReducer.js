import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import { TodoReducer } from "./TodoReducer";

const AppReducers = combineReducers({
  todos: TodoReducer,
  counter: CounterReducer,
});

export { AppReducers };
