import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, createTodo } from "../../actions";
import HomePage from "./HomePage";

const withProps = (Component) => (props) => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <HomePage
      todos={todos}
      fetchData={() => dispatch(getTodos())}
      createPost={() => dispatch(createTodo())}
    />
  );
};

export default withProps;
