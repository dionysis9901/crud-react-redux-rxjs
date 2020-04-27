const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: { id },
});

const deleteTodoSuccess = () => ({
  type: "DELETE_TODO_SUCCESS",
});

const deleteTodoFailed = (msg) => ({
  type: "DELETE_TODO_FAILED",
  payload: { msg },
});

export { deleteTodo, deleteTodoSuccess, deleteTodoFailed };
