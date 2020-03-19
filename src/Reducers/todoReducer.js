import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from "Actions/actionTypes";

const storedReducer = JSON.parse(localStorage.getItem("todoReducer"));
console.log(storedReducer);
let DEFAULT_STATE;
if (storedReducer) {
  DEFAULT_STATE = storedReducer;
} else {
  DEFAULT_STATE = {
    todos: [],
    id: 0
  };
}

const todoReducer = (state = DEFAULT_STATE, action) => {
  let newState;
  switch (action.type) {
    case GET_TODOS:
      return state;
    case ADD_TODO:
      console.log(action);
      newState = { ...state };
      newState.id++;
      newState = {
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
      localStorage.setItem("todoReducer", JSON.stringify(newState));
      return newState;
    case UPDATE_TODO:
      let idx = state.todos.findIndex(x => x.id === action.todo.id);
      newState = { ...state };
      newState.todos[idx] = action.todo;
      localStorage.setItem("todoReducer", JSON.stringify(newState));
      return newState;
    case REMOVE_TODO:
      let todos = state.todos.filter(x => x.id !== action.id);
      localStorage.setItem("todoReducer", JSON.stringify({ ...state, todos }));
      return { ...state, todos };
    default:
      return state;
  }
};

export default todoReducer;
