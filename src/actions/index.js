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

export const postDeleteSuccessfull = () => ({
  type: "POST_DELETED_SUCCESSFULL",
});

export const postDeleteFailed = (msg) => ({
  type: "POST_DELETED_FAILED",
  payload: { msg },
});

export const completeStatusUpdateSuccesfull = () => ({
  type: "COMPLETE_STATUS_UPDATE_SUCCESSFULL",
});

export const completeStatusUpdateFailed = (msg) => ({
  type: "COMPLETE_STATUS_UPDATE_FAILED",
  payload: { msg },
});

export const createTodo = (title) => ({
  type: "CREATE_TODO",
  payload: { title },
});

export const postCreated = () => ({
  type: "POST_CREATED",
});

export const postFailed = (msg) => ({
  type: "POST_FAILED",
  payload: { msg },
});

export const todoCompletedStatusChanged = (completed, id, title) => ({
  type: "TODO_COMPLETED_STATUS_CHANGED",
  payload: { completed, id, title },
});

export const openModal = () => ({ type: "OPEN_MODAL" });

export const getInput = (title) => ({
  type: "GET_INPUT",
  payload: { title },
});

export const cancelPost = () => ({ type: "CANCEL_POST" });
