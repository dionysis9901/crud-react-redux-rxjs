import React from "react";
import Todo from "../todo";
import Button from "../button";

const HomePage = ({ todos, fetchData }) => {
  return (
    <div className="homePage">
      <Button content={"Get Data"} onClick={fetchData} />
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
