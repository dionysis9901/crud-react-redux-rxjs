import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../actions";
import HomePage from "./HomePage";

const withProps = (Component) => (props) => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  return <HomePage todos={todos} fetchData={() => dispatch(fetchTodos())} />;
};

export default withProps;
