const userTypedNameForNewTodo = (title) => ({
  type: "USER_TYPED_NAME_FOR_NEW_TODO",
  payload: { title },
});

const userRenamedTodo = (title) => ({
  type: "USER_RENAMED_TODO",
  payload: { title },
});

const userCancelNewTodo = () => ({ type: "USER_CANCEL_NEW_TODO" });

const userCancelRenameTodo = () => ({
  type: "USER_CANCEL_RENAME_TODO",
});

const openCreateTodoScreen = () => ({ type: "OPEN_CREATE_TODO_SCREEN" });

const userOpenRenameScreen = (id, completed) => ({
  type: "USER_OPEN_RENAME_SCREEN",
  payload: { id, completed },
});

export {
  userTypedNameForNewTodo,
  userRenamedTodo,
  userCancelNewTodo,
  userCancelRenameTodo,
  openCreateTodoScreen,
  userOpenRenameScreen,
};
