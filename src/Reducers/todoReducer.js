import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from "Actions/actionTypes";
import { START_RECORD, END_RECORD, RESET_RECORD } from "../Actions/actionTypes";

const storedReducer = JSON.parse(localStorage.getItem("todoReducer"));
console.log(storedReducer);
let DEFAULT_STATE;
if (storedReducer) {
  DEFAULT_STATE = storedReducer;
} else {
  DEFAULT_STATE = {
    todos: [],
    id: 0,
    recording: false,
    record: []
  };
}

const todoReducer = (state = DEFAULT_STATE, action) => {
  let newState;
  let record;
  let todos;
  let idx;
  switch (action.type) {
    case GET_TODOS:
      return state;
    case ADD_TODO:
      // Initialise new state object
      newState = { ...state };
      newState.id++;
      // Determine changes to todos
      todos = [
        {
          name: action.todo.name,
          description: action.todo.description,
          createdAt: action.todo.createdAt,
          id: newState.id
        },
        ...newState.todos
      ];
      // Determine changes to record
      if (state.recording) {
        record = [
          ...newState.record,
          { actionType: action.type, todos: [...todos], changeIdx: 0 }
        ];
      } else {
        record = [...newState.record];
      }
      // Update state
      newState = {
        ...newState,
        todos,
        record
      };
      localStorage.setItem("todoReducer", JSON.stringify(newState));
      return newState;
    case UPDATE_TODO:
      idx = state.todos.findIndex(x => x.id === action.todo.id);
      newState = { ...state };
      newState.todos[idx] = action.todo;
      if (state.recording) {
        record = [
          ...newState.record,
          {
            actionType: action.type,
            todos: [...newState.todos],
            changeIdx: idx
          }
        ];
      } else {
        record = [...newState.record];
      }
      newState = { ...newState, record };
      localStorage.setItem("todoReducer", JSON.stringify(newState));
      return newState;
    case REMOVE_TODO:
      newState = { ...state };
      todos = newState.todos.filter(x => x.id !== action.id);
      if (state.recording) {
        idx = state.todos.findIndex(x => x.id === action.id);
        record = [
          ...newState.record,
          { actionType: action.type, todos: [...todos], changeIdx: idx }
        ];
      } else {
        record = [...newState.record];
      }
      newState = { ...newState, record, todos };
      localStorage.setItem("todoReducer", JSON.stringify(newState));
      return newState;
    case START_RECORD:
      newState = {
        ...state,
        recording: true,
        record: [
          ...state.record,
          { actionType: action.type, todos: [...state.todos] }
        ]
      };
      localStorage.setItem("todoReducer", JSON.stringify(newState));
      return newState;
    case END_RECORD:
      newState = {
        ...state,
        recording: false
      };
      localStorage.setItem("todoReducer", JSON.stringify(newState));
      return newState;
    case RESET_RECORD:
      newState = {
        ...state,
        recording: false,
        record: []
      };
      localStorage.setItem("todoReducer", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
