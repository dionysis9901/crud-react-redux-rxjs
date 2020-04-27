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

export const changeTitle = (title) => ({
  type: "CHANGE_TITLE",
  payload: { title },
});

export const newTitleCanceled = () => ({
  type: "NEW_TITLE_CANCELED",
});
export const cancelPost = () => ({ type: "CANCEL_POST" });

export const newTitleChanged = (title, id, completed) => ({
  type: "NEW_TITLE_CHANGED",
  payload: { title, id, completed },
});

export const openSettings = (id, completed) => ({
  type: "OPEN_SETTINGS",
  payload: { id, completed },
});

export const titleChangedSuccesfull = () => ({
  type: "TITLE_CHANGED_SUCCESFULL",
});

export const titleChangedFailed = (msg) => ({
  type: "TITLE_CHANGED_FAILED",
  payload: { msg },
});
