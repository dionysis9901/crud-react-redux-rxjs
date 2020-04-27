import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodos,
  createTodo,
  openModal,
  getInput,
  cancelPost,
  changeTitle,
  newTitleCanceled,
  newTitleChanged,
} from "../../actions";
import HomePage from "./HomePage";

const withProps = (Component) => (props) => {
  const {
    todos,
    createTodoModal,
    title,
    settingsOn,
    newTitle,
    itemId,
    itemCompletedStatus,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <HomePage
      todos={todos}
      createTodoModal={createTodoModal}
      settingsOn={settingsOn}
      createPost={() => dispatch(createTodo(title))}
      newTitleChanged={() => {
        console.log(itemCompletedStatus);
        return dispatch(newTitleChanged(newTitle, itemId, itemCompletedStatus));
      }}
      fetchData={() => dispatch(getTodos())}
      openModal={() => dispatch(openModal())}
      getInput={(title) => dispatch(getInput(title))}
      changeTitle={(newTitle) => dispatch(changeTitle(newTitle))}
      cancelPost={() => dispatch(cancelPost())}
      newTitleCanceled={() => dispatch(newTitleCanceled())}
    />
  );
};

export default withProps;
