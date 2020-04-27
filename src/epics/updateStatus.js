import { map, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";

import {
  getTodos,
  completeStatusUpdateSuccess,
  completeStatusUpdateFailed,
} from "../actions";

const updateStatusEpic = (action$) =>
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

const updateStatusSuccessEpic = (action$) =>
  action$.pipe(
    ofType("COMPLETE_STATUS_UPDATE_SUCCESS"),
    map(() => getTodos())
  );

export { updateStatusEpic, updateStatusSuccessEpic };
