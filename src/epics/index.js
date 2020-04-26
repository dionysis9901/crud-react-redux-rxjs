import { mergeMap, catchError, map, switchMap, mapTo } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  getTodosSuccess,
  getTodosFailed,
  postCreated,
  postFailed,
} from "../actions";
import { ajax } from "rxjs/ajax";

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

export const createTodoEpic = (action$) =>
  action$.pipe(
    ofType("CREATE_TODO"),
    switchMap((action) => {
      const request = {
        url: `https://arr-todo.herokuapp.com/todos`,
        method: "POST",
        headers: { "content-type": "application/json" },
        body: { title: "lorem ipsum dolor sit" },
      };

      return ajax(request).pipe(
        map((res) => {
          if (res.status === 200 || res.status === 201) {
            console.log(res);
            return postCreated();
          } else {
            return postFailed(res.errorMessage);
          }
        })
      );
    })
  );
