import { mergeMap, catchError, map, switchMap, mapTo } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  getTodosSuccess,
  getTodosFailed,
  postCreated,
  postFailed,
  getTodos,
  postDeleteSuccessfull,
  postDeleteFailed,
  completeStatusUpdateSuccesfull,
  completeStatusUpdateFailed,
  titleChangedSuccesfull,
  titleChangedFailed,
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
            return postCreated();
          } else {
            return postFailed(res.errorMessage);
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
            return postDeleteSuccessfull();
          } else {
            return postDeleteFailed(res.errorMessage);
          }
        })
      );
    })
  );

export const updateCompleteStatusEpic = (action$) =>
  action$.pipe(
    ofType("TODO_COMPLETED_STATUS_CHANGED"),
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
            return completeStatusUpdateSuccesfull();
          } else {
            return completeStatusUpdateFailed(res.errorMessage);
          }
        })
      );
    })
  );

export const updateCompletedSuccesfullEpic = (action$) =>
  action$.pipe(
    ofType("COMPLETE_STATUS_UPDATE_SUCCESSFULL"),
    map(() => getTodos())
  );

export const titleChangedEpic = (action$) =>
  action$.pipe(
    ofType("NEW_TITLE_CHANGED"),
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
            return titleChangedSuccesfull();
          } else {
            return titleChangedFailed(res.errorMessage);
          }
        })
      );
    })
  );

export const postDeletedEpic = (action$) =>
  action$.pipe(
    ofType("POST_DELETED_SUCCESSFULL" || "POST_CREATED"),
    map(() => getTodos())
  );

export const postCreatedEpic = (action$) =>
  action$.pipe(
    ofType("POST_CREATED"),
    map(() => getTodos())
  );

export const titleChangedSuccessEpic = (action$) =>
  action$.pipe(
    ofType("TITLE_CHANGED_SUCCESFULL"),
    map(() => getTodos())
  );
