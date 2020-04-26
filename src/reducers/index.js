const initialState = { todos: [] };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_TODOS":
      return {
        ...state,
      };

    case "GET_TODOS_SUCCESS":
      console.log(payload);
      return {
        ...state,
        todos: payload.todos,
      };

    case "GET_TODOS_FAILED":
      console.log(payload.message);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
