import React from "react";
import HomePage from "./HomePage";

import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../actions";

const withProps = (Component) => (props) => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  return <HomePage todos={todos} fetchData={() => dispatch(fetchTodos())} />;
};

export default withProps;
