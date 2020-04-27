import React from "react";
import Todos from "./Todos";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  completeStatusUpdate,
  userOpenRenameScreen,
} from "../../actions";

const withProps = (Component) => (props) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  return (
    <div className="homePage__data">
      {todos.map((todo, index) => {
        return (
          <Todos
            key={index}
            userId={todo.userId}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            userOpenRenameScreen={() =>
              dispatch(userOpenRenameScreen(todo.id, todo.completed))
            }
            deleteTodo={() => dispatch(deleteTodo(todo.id))}
            completeStatusUpdate={() =>
              dispatch(
                completeStatusUpdate(todo.completed, todo.id, todo.title)
              )
            }
          />
        );
      })}
    </div>
  );
};
export default withProps;

{
  /* <Todo
userId={userId}
id={id}
title={title}
completed={completed}
userOpenRenameScreen={() => dispatch(userOpenRenameScreen(id, completed))}
deleteTodo={() => dispatch(deleteTodo(id))}
completeStatusUpdate={() =>
  dispatch(completeStatusUpdate(completed, id, title))
}
/> */
}
