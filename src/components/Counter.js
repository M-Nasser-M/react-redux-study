import React from "react";
import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  counterAdd,
  counterReset,
  counterSub,
} from "../actions/counterActions";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleAdd = () => {
    dispatch(counterAdd());
  };
  const handleSub = () => {
    dispatch(counterSub());
  };
  const handleReset = () => {
    dispatch(counterReset());
  };
  return (
    <>
      <Row>
        {counter}
        <Button onClick={handleAdd} className="m-3">
          Add
        </Button>
        <Button onClick={handleSub} className="m-3">
          Sub
        </Button>
        <Button onClick={handleReset} className="m-3">
          Reset
        </Button>
      </Row>
    </>
  );
}

export default Counter;
