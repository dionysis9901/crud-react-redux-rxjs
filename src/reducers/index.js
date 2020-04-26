const initialState = { todos: [], createTodoModal: false, title: null };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_TODOS":
      return {
        ...state,
      };

    case "GET_TODOS_SUCCESS":
      return {
        ...state,
        todos: payload.todos,
      };

    case "GET_TODOS_FAILED":
      return {
        ...state,
      };

    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
      };

    case "TODO_COMPLETED_STATUS_CHANGED":
      return { ...state };
    case "CREATE_TODO": {
      return { ...state, createTodoModal: true };
    }

    case "POST_CREATED": {
      return { ...state, createTodoModal: false, title: null };
    }

    case "POST_FAILED": {
      return { ...state, createTodoModal: false, title: null };
    }

    case "OPEN_MODAL": {
      return { ...state, createTodoModal: true };
    }

    case "GET_INPUT": {
      return { ...state, title: payload.title };
    }

    case "CANCEL_POST": {
      return { ...state, title: null, createTodoModal: false };
    }

    case "COMPLETE_STATUS_UPDATE_SUCCESSFULL":
      return { ...state };

    case "COMPLETE_STATUS_UPDATE_FAILED":
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
