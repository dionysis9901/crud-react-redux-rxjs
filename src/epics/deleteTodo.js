import { map, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";

import { getTodos, deleteTodoSuccess, deleteTodoFailed } from "../actions";

const deleteTodoEpic = (action$) =>
  action$.pipe(
    ofType("DELETE_TODO"),
    switchMap(({ payload }) => {
      const request = {
        url: `https://arr-todo.herokuapp.com/todos/${payload.id}`,
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

const deleteTodoSuccessEpic = (action$) =>
  action$.pipe(
    ofType("DELETE_TODO_SUCCESS" || "CREATE_TODO_SUCCESS"),
    map(() => getTodos())
  );

export { deleteTodoEpic, deleteTodoSuccessEpic };
