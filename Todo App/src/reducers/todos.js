import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants';
const initialState = JSON.parse(localStorage.getItem('todos')).todos || [];

let todoID = initialState.length || 0;
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [ ...state, {
        id: todoID++,
        text: action.text,
        dueDate: action.dueDate,
        completed: false
      }];
    }
    case TOGGLE_TODO: {
      return state.map(todo =>
       todo.id === action.id ? { ...todo, completed: !todo.completed} : todo
      )
    }
    case DELETE_TODO: {
      return state.filter(todo => todo.id !== action.id);
    }
    default: {
      return state;
    }
  }
}