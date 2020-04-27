import { map, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";

import { createTodoSuccess, createTodoFailed, getTodos } from "../actions";

const createTodoEpic = (action$) =>
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

const createTodoSuccessEpic = (action$) =>
  action$.pipe(
    ofType("CREATE_TODO_SUCCESS"),
    map(() => getTodos())
  );

export { createTodoEpic, createTodoSuccessEpic };
