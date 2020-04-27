const getTodos = () => ({
  type: "GET_TODOS",
});

const getTodosSuccess = (todos) => ({
  type: "GET_TODOS_SUCCESS",
  payload: { todos },
});

const getTodosFailed = (message) => ({
  type: "GET_TODOS_FAILED",
  payload: { message },
});

export { getTodos, getTodosSuccess, getTodosFailed };
