import React from "react";
import "./todos.scss";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
const Todos = ({
  userId,
  id,
  title,
  completed,
  userOpenRenameScreen,
  completeStatusUpdate,
  deleteTodo,
}) => {
  if (completed) {
    return (
      <div className="todo inactive">
        <p className="todo__title inactive__title">{title}</p>
        <input
          type="checkbox"
          className="todo__status"
          defaultChecked={completed ? true : false}
          onChange={completeStatusUpdate}
        />
        <div className="todo__buttons todo__inactive__buttons">
          <button
            disabled={true}
            className="inactive__inactiveBtn"
            onClick={userOpenRenameScreen}
          >
            <AiFillEdit />
          </button>
          <button
            disabled={true}
            className="inactive__inactiveBtn"
            onClick={deleteTodo}
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
          onChange={completeStatusUpdate}
        />
        <div className="todo__buttons">
          {" "}
          <button className="todo__buttons__btn" onClick={userOpenRenameScreen}>
            <AiFillEdit />
          </button>
          <button className="todo__buttons__btn" onClick={deleteTodo}>
            <AiTwotoneDelete />
          </button>
        </div>
      </div>
    );
  }
};
export default Todos;
