import { SHOW_ALL, SET_VISIBILITY_FILTER} from '../constants';
const initialState = JSON.parse(localStorage.getItem('todos')).visibilityFilter || SHOW_ALL;
export default function visibilityFilter(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
    return action.filter;
    default:
    return state;
  }
}