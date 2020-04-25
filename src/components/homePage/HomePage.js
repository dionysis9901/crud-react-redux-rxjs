import React from "react";
import Todo from "../todo";
const HomePage = ({ todos, fetchData, checkedBox, uncheckedBox }) => {
  return (
    <div className="homePage">
      <button className="homePage__button" onClick={fetchData}>
        Fetch some Data
      </button>

      <div className="homePage__data">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              userId={todo.userId}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
