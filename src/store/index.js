import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import reducer from "../reducers";

import {
  getTodosEpic,
  createTodoEpic,
  createTodoSuccessEpic,
  todoRenameEpic,
  todoRenameSuccessEpic,
  deleteTodoEpic,
  deleteTodoSuccessEpic,
  updateStatusEpic,
  updateStatusSuccessEpic,
} from "../epics";

const configureStore = () => {
  const epicsArr = [
    getTodosEpic,
    createTodoEpic,
    createTodoSuccessEpic,
    deleteTodoEpic,
    deleteTodoSuccessEpic,
    updateStatusEpic,
    todoRenameEpic,
    todoRenameSuccessEpic,
    updateStatusSuccessEpic,
  ];
  const epics = combineEpics(...epicsArr);
  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware];
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
  epicMiddleware.run(epics);
  return store;
};

export { configureStore };
