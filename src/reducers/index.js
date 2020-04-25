const initialState = { data: "some data right here" };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SETTING_GAME":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
