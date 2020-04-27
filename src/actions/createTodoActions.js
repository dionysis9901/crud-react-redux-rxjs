const createTodo = (title) => ({
  type: "CREATE_TODO",
  payload: { title },
});

const createTodoSuccess = () => ({
  type: "CREATE_TODO_SUCCESS",
});

const createTodoFailed = (msg) => ({
  type: "CREATE_TODO_FAILED",
  payload: { msg },
});

export { createTodo, createTodoSuccess, createTodoFailed };
