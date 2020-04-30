import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./HomePage";
import {
  getTodos,
  createTodo,
  openCreateTodoScreen,
  userTypedNameForNewTodo,
  userCancelNewTodo,
  userRenamedTodo,
  userCancelRenameTodo,
  titleRenamed,
} from "../../actions";

const withProps = (Component) => (props) => {
  const {
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
      createTodoModal={createTodoModal}
      settingsOn={settingsOn}
      createPost={() => dispatch(createTodo(title))}
      fetchData={() => dispatch(getTodos())}
      openCreateTodoScreen={() => dispatch(openCreateTodoScreen())}
      userRenamedTodo={(newTitle) => dispatch(userRenamedTodo(newTitle))}
      userCancelNewTodo={() => dispatch(userCancelNewTodo())}
      userCancelRenameTodo={() => dispatch(userCancelRenameTodo())}
      userTypedNameForNewTodo={(title) =>
        dispatch(userTypedNameForNewTodo(title))
      }
      titleRenamed={() => {
        return dispatch(titleRenamed(newTitle, itemId, itemCompletedStatus));
      }}
    />
  );
};

export default withProps;
