import React from "react";
import "./todo.scss";
import {
  deleteTodo,
  completeStatusUpdate,
  userOpenRenameScreen,
} from "../../actions";
import { useDispatch } from "react-redux";
import { BsFillTrashFill, BsGear } from "react-icons/bs";
const Todo = ({ userId, id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      <input
        type="checkbox"
        className="todo__status"
        defaultChecked={completed ? true : false}
        onChange={(event) => {
          return dispatch(completeStatusUpdate(completed, id, title));
        }}
      />
      <div className="todo__buttons"></div>
      <button
        className="todo__buttons__btn"
        onClick={() => {
          return dispatch(userOpenRenameScreen(id, completed));
        }}
      >
        <BsGear />
      </button>
      <button
        className="todo__buttons__btn"
        onClick={() => dispatch(deleteTodo(id))}
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
};
export default Todo;
