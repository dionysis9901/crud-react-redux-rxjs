import { mergeMap, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { fetchTodosSuccess, fetchTodosFailed } from "../actions";

const fetch = require("node-fetch");

export const fetchEpic = (action$) =>
  action$.pipe(
    ofType("FETCH_TODOS"),
    mergeMap(async () => {
      const url = `https://arr-todo.herokuapp.com/todos`;
      const todos = await fetch(url).then((res) => res.json());
      return fetchTodosSuccess(todos);
    }),
    catchError((err) => Promise.resolve(fetchTodosFailed(err.message)))
  );
