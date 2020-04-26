import React from "react";
import "./todo.scss";
import { BsFillTrashFill, BsGear } from "react-icons/bs";
const Todo = ({ userId, id, title, completed }) => {
  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      <input
        type="checkbox"
        className="todo__status"
        defaultChecked={completed}
      />
      <div className="todo__buttons"></div>
      <button className="todo__buttons__btn">
        <BsGear />
      </button>
      <button className="todo__buttons__btn">
        <BsFillTrashFill />
      </button>
    </div>
  );
};
export default Todo;
