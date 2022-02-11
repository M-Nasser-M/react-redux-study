import React, { useEffect, useRef } from "react";
import { Button, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, initializeTodos } from "../actions/todosAction";

let id = 0;
function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const input = useRef(null);

  useEffect(() => {
    dispatch(initializeTodos());
  }, [dispatch]);

  const handleAdd = () => {
    const todoText = input.current.value;
    const todo = { todoText: todoText, id: id++ };
    dispatch(addTodo(todo));
    input.current.value = "";
  };

  return (
    <>
      <Row>
        <FormControl ref={input} className="my-3" type="text" />
        <Button onClick={handleAdd} className="mb-2">
          Add
        </Button>
      </Row>
      <Row>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.todoText}</li>
          ))}
        </ul>
      </Row>
    </>
  );
}

export default Todos;
