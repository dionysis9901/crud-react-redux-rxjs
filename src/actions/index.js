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

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: { id },
});

export const createTodo = () => ({
  type: "CREATE_TODO",
});

export const postCreated = () => ({
  type: "POST_CREATED",
});

export const postFailed = (msg) => ({
  type: "POST_FAILED",
  payload: { msg },
});
