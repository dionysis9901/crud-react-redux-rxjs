import React from "react";
import Todo from "../todos";
import Button from "../button";
import "./homepage.scss";

const HomePage = ({
  todos,
  fetchData,
  createPost,
  createTodoModal,
  openCreateTodoScreen,
  userTypedNameForNewTodo,
  userCancelNewTodo,
  settingsOn,
  userRenamedTodo,
  userCancelRenameTodo,
  titleRenamed,
}) => {
  if (createTodoModal) {
    return (
      <div className="homePage">
        <h1 className="homePage__heading">🥽 C R U D 🥽</h1>
        <h3 className="homePage__CreateTodoScreen">Create A New Todo!</h3>
        <div className="modal">
          <input
            type="text"
            placeholder="Give A Nice Title 🤖"
            className="modal__input"
            onChange={(event) => userTypedNameForNewTodo(event.target.value)}
          ></input>
          <Button
            content={"Create!"}
            onClick={createPost}
            extraClassName={"modal__button"}
          />
          <Button
            content={"Back"}
            onClick={userCancelNewTodo}
            extraClassName={"modal__button"}
          />
        </div>

        <div className="homePage__signature">
          <p className="homePage__signature__text">
            Made by Dionysis Koufis with ❤️ and ⚛️
          </p>
        </div>
      </div>
    );
  } else if (settingsOn) {
    return (
      <div className="homePage">
        <h1 className="homePage__heading">🥽 C R U D 🥽</h1>
        <h3 className="homePage__renameTodo">Rename Todo!</h3>
        <div className="modal">
          {" "}
          <input
            type="text"
            placeholder="Change Name 🤖"
            className="modal__input"
            onChange={(event) => {
              return userRenamedTodo(event.target.value);
            }}
          ></input>
          <Button
            content={"Rename!"}
            onClick={titleRenamed}
            extraClassName={"modal__button"}
          />
          <Button
            content={"Back"}
            onClick={userCancelRenameTodo}
            extraClassName={"modal__button"}
          />
        </div>

        <div className="homePage__signature">
          <p className="homePage__signature__text">
            Made by Dionysis Koufis with ❤️ and ⚛️
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="homePage">
        <h1 className="homePage__heading">🥽 C R U D 🥽</h1>
        <div className="homePage__buttons__wrapper">
          <Button content={"Get Todos"} onClick={fetchData} />
          <Button content={"Create Todo"} onClick={openCreateTodoScreen} />
        </div>

        <Todo />

        <div className="homePage__signature">
          <p className="homePage__signature__text">
            Made by Dionysis Koufis with ❤️ and ⚛️
          </p>
        </div>
      </div>
    );
  }
};
export default HomePage;
