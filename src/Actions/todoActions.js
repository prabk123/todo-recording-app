import { GET_TODOS, ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./actionTypes";

export const getTodos = () => {
  return { type: GET_TODOS };
};

export const addTodo = todo => {
  return { type: ADD_TODO, todo };
};

export const updateTodo = todo => {
  return { type: UPDATE_TODO, todo };
};

export const removeTodo = id => {
  return { type: REMOVE_TODO, id };
};
