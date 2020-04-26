import React from "react";
import Todo from "../todo";
import Button from "../button";
import "./homepage.scss";

const HomePage = ({
  todos,
  fetchData,
  createPost,
  createTodoModal,
  openModal,
  getInput,
  cancelPost,
}) => {
  if (createTodoModal) {
    return (
      <div className="homePage">
        <h1 className="homePage__heading">🥽 C R U D 🥽</h1>
        <div className="modal">
          <input
            type="text"
            placeholder="Give A Nice Title 🤖"
            className="modal__input"
            onChange={(event) => getInput(event.target.value)}
          ></input>
          <Button
            content={"Create!"}
            onClick={createPost}
            extraClassName={"modal__button"}
          />
          <Button
            content={"Back"}
            onClick={cancelPost}
            extraClassName={"modal__button"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="homePage">
        <h1 className="homePage__heading">🥽 C R U D 🥽</h1>
        <div className="homePage__buttons__wrapper">
          <Button content={"Get Todos"} onClick={fetchData} />
          <Button content={"Create Todo"} onClick={openModal} />
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
  }
};
export default HomePage;
