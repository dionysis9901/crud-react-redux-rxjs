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

    case "POST_DELETED_FAILED":
      return { ...state };
    //DELETE  END

    // CREATE
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

    // CREATE END

    //COMPLETE

    case "TODO_COMPLETED_STATUS_CHANGED":
      return { ...state, itemCompletedStatus: !payload.completed };

    case "COMPLETE_STATUS_UPDATE_SUCCESSFULL":
      return { ...state, itemCompletedStatus: null };

    case "COMPLETE_STATUS_UPDATE_FAILED":
      return { ...state };

    //COMPLETE END

    //NEW TITLE
    case "CHANGE_TITLE":
      return { ...state, newTitle: payload.title };

    case "OPEN_SETTINGS":
      return {
        ...state,
        settingsOn: true,
        itemId: payload.id,
        itemCompletedStatus: payload.completed,
      };

    case "NEW_TITLE_CHANGED": {
      return { ...state, settingsOn: false };
    }

    case "NEW_TITLE_CANCELED": {
      return {
        ...state,
        settingsOn: false,
        newTitle: null,
        itemId: null,
        itemCompletedStatus: null,
      };
    }

    case "TITLE_CHANGED_SUCCESFULL": {
      return {
        ...state,
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
