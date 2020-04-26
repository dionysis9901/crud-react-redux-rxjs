import { mergeMap, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { getTodosSuccess, getTodosFailed } from "../actions";

const fetch = require("node-fetch");

export const fetchEpic = (action$) =>
  action$.pipe(
    ofType("GET_TODOS"),
    mergeMap(async () => {
      const url = `https://arr-todo.herokuapp.com/todos`;
      const todos = await fetch(url).then((res) => res.json());
      return getTodosSuccess(todos);
    }),
    catchError((err) => Promise.resolve(getTodosFailed(err.message)))
  );
