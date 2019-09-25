import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, DELETE_TODO } from '../constants';

export const addTodo = (text, dueDate) => {
  return {
    type: ADD_TODO,
    text,
    dueDate
  }
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
};
