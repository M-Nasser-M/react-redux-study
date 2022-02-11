import axios from "axios";
import { actionTypes } from "../reducers/TodoReducer";

const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: todo,
  };
};

const initTodos = (todos) => {
  return {
    type: actionTypes.INIT_TODO,
    payload: todos,
  };
};

const initializeTodos = () => async (dispatch, getState) => {
  const initialNotes = await axios.get(
    "https://mocki.io/v1/b5c34952-9f41-483f-b9ae-f9f5bc2a0409"
  );

  dispatch(initTodos(initialNotes.data));
};

export { addTodo, initializeTodos, initTodos };
