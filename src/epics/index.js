import { mergeMap, catchError, map, switchMap, mapTo } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  getTodosSuccess,
  getTodosFailed,
  createTodoSuccess,
  createTodoFailed,
  getTodos,
  deleteTodoSuccess,
  deleteTodoFailed,
  completeStatusUpdateSuccess,
  completeStatusUpdateFailed,
  titleRenamedSuccess,
  titleRenamedFailed,
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
        body: { userId: 1, title: action.payload.title, completed: false },
      };

      return ajax(request).pipe(
        map((res) => {
          if (res.status === 200 || res.status === 201) {
            console.log(res);
            return createTodoSuccess();
          } else {
            return createTodoFailed(res.errorMessage);
          }
        })
      );
    })
  );

export const deleteTodoEpic = (action$) =>
  action$.pipe(
    ofType("DELETE_TODO"),
    switchMap((action) => {
      const request = {
        url: `https://arr-todo.herokuapp.com/todos/${action.payload.id}`,
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };

      return ajax(request).pipe(
        map((res) => {
          if (res.status === 200 || res.status === 201) {
            console.log(res);
            return deleteTodoSuccess();
          } else {
            return deleteTodoFailed(res.errorMessage);
          }
        })
      );
    })
  );

export const updateCompleteStatusEpic = (action$) =>
  action$.pipe(
    ofType("COMPLETE_STATUS_UPDATE"),
    switchMap((action) => {
      const request = {
        url: `https://arr-todo.herokuapp.com/todos/${action.payload.id}`,
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: {
          userId: 1,
          title: action.payload.title,
          completed: !action.payload.completed,
        },
      };

      return ajax(request).pipe(
        map((res) => {
          if (res.status === 200 || res.status === 201) {
            console.log(res);
            return completeStatusUpdateSuccess();
          } else {
            return completeStatusUpdateFailed(res.errorMessage);
          }
        })
      );
    })
  );

export const updateCompletedSuccesfullEpic = (action$) =>
  action$.pipe(
    ofType("COMPLETE_STATUS_UPDATE_SUCCESS"),
    map(() => getTodos())
  );

export const titleRenamedEpic = (action$) =>
  action$.pipe(
    ofType("TITLE_RENAMED"),
    switchMap((action) => {
      const request = {
        url: `https://arr-todo.herokuapp.com/todos/${action.payload.id}`,
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: {
          userId: 1,
          title: action.payload.title,
          completed: action.payload.completed,
        },
      };

      return ajax(request).pipe(
        map((res) => {
          if (res.status === 200 || res.status === 201) {
            console.log(res);
            return titleRenamedSuccess();
          } else {
            return titleRenamedFailed(res.errorMessage);
          }
        })
      );
    })
  );

export const postDeletedEpic = (action$) =>
  action$.pipe(
    ofType("DELETE_TODO_SUCCESS" || "CREATE_TODO_SUCCESS"),
    map(() => getTodos())
  );

export const createTodoSuccessEpic = (action$) =>
  action$.pipe(
    ofType("CREATE_TODO_SUCCESS"),
    map(() => getTodos())
  );

export const titleRenamedSuccessEpic = (action$) =>
  action$.pipe(
    ofType("TITLE_RENAMED_SUCCESS"),
    map(() => getTodos())
  );
