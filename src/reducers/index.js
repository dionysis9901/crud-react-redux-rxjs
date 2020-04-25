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

    default:
      return state;
  }
};

export default reducer;
