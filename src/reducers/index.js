const initialState = { todos: [] };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_TODOS":
      return {
        ...state,
      };

    case "FETCH_TODOS_SUCCESS":
      console.log(payload);
      return {
        ...state,
        todos: payload.todos,
      };

    case "FETCH_TODOS_FAILED":
      console.log(payload.message);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
