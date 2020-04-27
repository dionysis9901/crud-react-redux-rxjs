import React from "react";
import "./todo.scss";
import {
  deleteTodo,
  completeStatusUpdate,
  userOpenRenameScreen,
} from "../../actions";
import { useDispatch } from "react-redux";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
const Todo = ({ userId, id, title, completed }) => {
  const dispatch = useDispatch();
  if (completed) {
    return (
      <div className="todo inactive">
        <p className="todo__title inactive__title">{title}</p>
        <input
          type="checkbox"
          className="todo__status"
          defaultChecked={completed ? true : false}
          onChange={(event) => {
            return dispatch(completeStatusUpdate(completed, id, title));
          }}
        />
        <div className="todo__buttons todo__inactive__buttons">
          <button
            disabled={true}
            className="inactive__inactiveBtn"
            onClick={() => {
              return dispatch(userOpenRenameScreen(id, completed));
            }}
          >
            <AiFillEdit />
          </button>
          <button
            disabled={true}
            className="inactive__inactiveBtn"
            onClick={() => dispatch(deleteTodo(id))}
          >
            <AiTwotoneDelete />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="todo active">
        <p className="todo__title">{title}</p>
        <input
          type="checkbox"
          className="todo__status"
          defaultChecked={completed ? true : false}
          onChange={(event) => {
            return dispatch(completeStatusUpdate(completed, id, title));
          }}
        />
        <div className="todo__buttons">
          {" "}
          <button
            className="todo__buttons__btn"
            onClick={() => {
              return dispatch(userOpenRenameScreen(id, completed));
            }}
          >
            <AiFillEdit />
          </button>
          <button
            className="todo__buttons__btn"
            onClick={() => dispatch(deleteTodo(id))}
          >
            <AiTwotoneDelete />
          </button>
        </div>
      </div>
    );
  }
};
export default Todo;
