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
//delete
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: { id },
});

export const deleteTodoSuccess = () => ({
  type: "DELETE_TODO_SUCCESS",
});

export const deleteTodoFailed = (msg) => ({
  type: "DELETE_TODO_FAILED",
  payload: { msg },
});
//delete end

//status
export const completeStatusUpdate = (completed, id, title) => ({
  type: "COMPLETE_STATUS_UPDATE",
  payload: { completed, id, title },
});

export const completeStatusUpdateSuccess = () => ({
  type: "COMPLETE_STATUS_UPDATE_SUCCESS",
});

export const completeStatusUpdateFailed = (msg) => ({
  type: "COMPLETE_STATUS_UPDATE_FAILED",
  payload: { msg },
});
//status end

//create

export const createTodo = (title) => ({
  type: "CREATE_TODO",
  payload: { title },
});

export const createTodoSuccess = () => ({
  type: "CREATE_TODO_SUCCESS",
});

export const createTodoFailed = (msg) => ({
  type: "CREATE_TODO_FAILED",
  payload: { msg },
});
//create end
//title

export const titleRenamed = (title, id, completed) => ({
  type: "TITLE_RENAMED",
  payload: { title, id, completed },
});

export const titleRenamedSuccess = () => ({
  type: "TITLE_RENAMED_SUCCESS",
});

export const titleRenamedFailed = (msg) => ({
  type: "TITLE_RENAMED_FAILED",
  payload: { msg },
});

//title end

//User Changes

export const userTypedNameForNewTodo = (title) => ({
  type: "USER_TYPED_NAME_FOR_NEW_TODO",
  payload: { title },
});

export const userRenamedTodo = (title) => ({
  type: "USER_RENAMED_TODO",
  payload: { title },
});
//User Changes End

//User Cancels

export const userCancelNewTodo = () => ({ type: "USER_CANCEL_NEW_TODO" });

export const userCancelRenameTodo = () => ({
  type: "USER_CANCEL_RENAME_TODO",
});

//User Cancels end

//user Screens
export const openCreateTodoScreen = () => ({ type: "OPEN_CREATE_TODO_SCREEN" });

export const userOpenRenameScreen = (id, completed) => ({
  type: "USER_OPEN_RENAME_SCREEN",
  payload: { id, completed },
});
//user Screens end
