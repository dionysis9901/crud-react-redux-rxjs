import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodos,
  createTodo,
  openModal,
  getInput,
  cancelPost,
} from "../../actions";
import HomePage from "./HomePage";

const withProps = (Component) => (props) => {
  const { todos, createTodoModal, title } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <HomePage
      todos={todos}
      createTodoModal={createTodoModal}
      createPost={() => dispatch(createTodo(title))}
      fetchData={() => dispatch(getTodos())}
      openModal={() => dispatch(openModal())}
      getInput={(title) => dispatch(getInput(title))}
      cancelPost={() => dispatch(cancelPost())}
    />
  );
};

export default withProps;
