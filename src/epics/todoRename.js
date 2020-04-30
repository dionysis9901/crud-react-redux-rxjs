import { map, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";

import { getTodos, titleRenamedSuccess, titleRenamedFailed } from "../actions";
const todoRenameEpic = (action$) =>
  action$.pipe(
    ofType("TITLE_RENAMED"),
    switchMap(({ payload }) => {
      const request = {
        url: `https://arr-todo.herokuapp.com/todos/${payload.id}`,
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: {
          userId: 1,
          title: payload.title,
          completed: payload.completed,
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

const todoRenameSuccessEpic = (action$) =>
  action$.pipe(
    ofType("TITLE_RENAMED_SUCCESS"),
    map(() => getTodos())
  );

export { todoRenameEpic, todoRenameSuccessEpic };
