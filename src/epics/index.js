import { getTodosEpic } from "./getTodo";
import { createTodoEpic, createTodoSuccessEpic } from "./createTodo";
import { todoRenameEpic, todoRenameSuccessEpic } from "./todoRename";
import { deleteTodoEpic, deleteTodoSuccessEpic } from "./deleteTodo";
import { updateStatusEpic, updateStatusSuccessEpic } from "./updateStatus";

export {
  getTodosEpic,
  createTodoEpic,
  createTodoSuccessEpic,
  todoRenameEpic,
  todoRenameSuccessEpic,
  deleteTodoEpic,
  deleteTodoSuccessEpic,
  updateStatusEpic,
  updateStatusSuccessEpic,
};
