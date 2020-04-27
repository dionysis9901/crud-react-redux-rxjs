import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
      titleRenamed={() => {
        console.log(itemCompletedStatus);
        return dispatch(titleRenamed(newTitle, itemId, itemCompletedStatus));
      }}
      fetchData={() => dispatch(getTodos())}
      openCreateTodoScreen={() => dispatch(openCreateTodoScreen())}
      userTypedNameForNewTodo={(title) =>
        dispatch(userTypedNameForNewTodo(title))
      }
      userRenamedTodo={(newTitle) => dispatch(userRenamedTodo(newTitle))}
      userCancelNewTodo={() => dispatch(userCancelNewTodo())}
      userCancelRenameTodo={() => dispatch(userCancelRenameTodo())}
    />
  );
};

//check ITEM ID IS NOT USED RIGHT NOW

export default withProps;
