import React from "react";
const Todo = ({ userId, id, title, completed }) => {
  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      <input
        type="checkbox"
        className="todo__status"
        defaultChecked={completed}
      />
    </div>
  );
};
export default Todo;
