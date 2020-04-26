import React from "react";
import Todo from "../todo";
import Button from "../button";
import "./homepage.scss";

const HomePage = ({ todos, fetchData, createPost }) => {
  return (
    <div className="homePage">
      <h1 className="homePage__heading">CRUD </h1>
      <div className="homePage__buttons__wrapper">
        {" "}
        <Button content={"Get Todos"} onClick={fetchData} />
        <Button content={"Create Todo"} onClick={createPost} />
      </div>

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
