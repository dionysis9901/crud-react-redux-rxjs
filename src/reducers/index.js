const initialState = {
  name: "lorem",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SETTING_GAME":
      return {
        ...state,
      };
  }
};

export default reducer;
