export const fetchTodos = () => ({
  type: "FETCH_TODOS",
});

export const fetchTodosSuccess = (todos) => ({
  type: "FETCH_TODOS_SUCCESS",
  payload: { todos },
});

export const fetchTodosFailed = (message) => ({
  type: "FETCH_TODOS_FAILED",
  payload: { message },
});
