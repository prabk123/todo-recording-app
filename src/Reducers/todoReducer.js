import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from "Actions/actionTypes";

const DEFAULT_STATE = {
  todos: [],
  id: 0
};

const todoReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
      return state;
    case ADD_TODO:
      let newState = { ...state };
      newState.id++;
      return {
        ...newState,
        todos: [
          ...newState.todos,
          {
            name: action.todo.name,
            description: action.todo.description,
            createdAt: action.todo.createdAt,
            id: newState.id
          }
        ]
      };
    case UPDATE_TODO:
      let idx = state.todos.findIndex(x => x.id === action.todo.id);
      let newState = { ...state };
      newState.todos[idx] = action.todo;
      return newState;
    case REMOVE_TODO:
      let todos = state.todos.filter(x => x.id !== action.id);
      return { ...state, todos };
  }
};

export default todoReducer;
