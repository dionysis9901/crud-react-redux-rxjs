export const getTodos = () => ({
  type: "GET_TODOS",
});

export const getTodosSuccess = (todos) => ({
  type: "GET_TODOS_SUCCESS",
  payload: { todos },
});

export const getTodosFailed = (message) => ({
  type: "GET_TODOS_FAILED",
  payload: { message },
});
