const initialState = {
  todos: [],
  createTodoModal: false,
  title: null,
  settingsOn: false,
  newTitle: null,
  itemId: null,
  itemCompletedStatus: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // GET
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
    // GET END

    //DELETE
    case "DELETE_TODO":
      return { ...state };

    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
      };

    case "DELETE_TODO_FAILED":
      return { ...state };
    //DELETE  END

    // CREATE
    case "CREATE_TODO": {
      return { ...state, createTodoModal: true };
    }

    case "CREATE_TODO_SUCCESS": {
      return { ...state, createTodoModal: false, title: null };
    }

    case "CREATE_TODO_FAILED": {
      return { ...state, createTodoModal: false, title: null };
    }

    case "OPEN_CREATE_TODO_SCREEN": {
      return { ...state, createTodoModal: true };
    }

    case "USER_TYPED_NAME_FOR_NEW_TODO": {
      return { ...state, title: payload.title };
    }

    case "USER_CANCEL_NEW_TODO": {
      return { ...state, title: null, createTodoModal: false };
    }

    // CREATE END

    //COMPLETE

    case "COMPLETE_STATUS_UPDATE":
      return { ...state, itemCompletedStatus: !payload.completed };

    case "COMPLETE_STATUS_UPDATE_SUCCESS":
      return { ...state, itemCompletedStatus: null };

    case "COMPLETE_STATUS_UPDATE_FAILED":
      return { ...state };

    //COMPLETE END

    //NEW TITLE
    case "USER_RENAMED_TODO":
      return { ...state, newTitle: payload.title };

    case "USER_OPEN_RENAME_SCREEN":
      return {
        ...state,
        settingsOn: true,
        itemId: payload.id,
        itemCompletedStatus: payload.completed,
      };

    case "TITLE_RENAMED": {
      return { ...state, settingsOn: false };
    }

    case "TITLE_RENAMED_SUCCESS": {
      return {
        ...state,
        newTitle: null,
        itemId: null,
        itemCompletedStatus: null,
      };
    }

    case "TITLE_RENAMED_FAILED": {
      return {
        ...state,
        newTitle: null,
        itemId: null,
        itemCompletedStatus: null,
      };
    }

    case "USER_CANCEL_RENAME_TODO": {
      return {
        ...state,
        settingsOn: false,
        newTitle: null,
        itemId: null,
        itemCompletedStatus: null,
      };
    }

    //NEW TITLE END
    default:
      return state;
  }
};

export default reducer;
