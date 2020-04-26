const initialState = { todos: [] };

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

    case "CREATE_TODO": {
      return { ...state };
    }

    case "POST_CREATED": {
      return { ...state };
    }

    case "POST_FAILED": {
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
