import React, { useEffect, useRef } from "react";
import { Button, FormControl, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo, initializeTodos } from "../actions/todosAction";

function Todos(props) {
  console.log(props);
  const input = useRef(null);

  useEffect(() => {
    props.dispatch(initializeTodos());
  }, []);

  const handleAdd = () => {
    const todoText = input.current.value;
    const todo = { todoText: todoText, id: props.todos.length + 1 };
    props.dispatch(addTodo(todo));
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
          {props.todos?.map((todo) => (
            <li key={todo.id}>{todo.todoText}</li>
          ))}
        </ul>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
