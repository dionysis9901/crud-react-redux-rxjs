import { getTodosSuccess, getTodosFailed } from "../actions";
import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";

import { catchError } from "rxjs/operators";

const fetch = require("node-fetch");

const getTodosEpic = (action$) =>
  action$.pipe(
    ofType("GET_TODOS"),
    mergeMap(async () => {
      const url = `https://arr-todo.herokuapp.com/todos`;
      const todos = await fetch(url).then((res) => res.json());
      return getTodosSuccess(todos);
    }),
    catchError((err) => Promise.resolve(getTodosFailed(err.message)))
  );

export { getTodosEpic };
