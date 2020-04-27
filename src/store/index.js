import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import reducer from "../reducers";

import {
  fetchEpic,
  createTodoEpic,
  postCreatedEpic,
  deleteTodoEpic,
  postDeletedEpic,
  updateCompleteStatusEpic,
  titleChangedEpic,
  titleChangedSuccessEpic,
  updateCompletedSuccesfullEpic,
} from "../epics";

const configureStore = () => {
  const epicsArr = [
    fetchEpic,
    createTodoEpic,
    postCreatedEpic,
    deleteTodoEpic,
    postDeletedEpic,
    updateCompleteStatusEpic,
    titleChangedEpic,
    titleChangedSuccessEpic,
    updateCompletedSuccesfullEpic,
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
