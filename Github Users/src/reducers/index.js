import { REQUEST_USERS, RECEIVE_USERS, SELECT_LANGUAGE } from '../constants';
import { combineReducers } from 'redux';

const language = (state = 'javascript', action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return action.language;
    default:
      return state;
  }
}

const users = (state = { fetching: false, items: [], receivedAt: 0}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        fetching: true
      }
    case RECEIVE_USERS:
    return {
      ...state,
      items: action.users,
      fetching: false,
      receivedAt: action.receivedAt
    }
    default:
      return state;
  }
}

const fetchUsersByLanguage = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_USERS:
    case RECEIVE_USERS:{
      return {
        ...state,
        [action.language]: users(state[action.language], action)
      }
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({language, users: fetchUsersByLanguage});
