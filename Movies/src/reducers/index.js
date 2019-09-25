import { combineReducers } from 'redux';
import { FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS } from '../constants';

const movies = (state = {items: [], fetching: false}, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        items: action.data,
        fetching: false
      }
    }
    default:
      return state;
  }
}

const movie = (state = {data: [], fetching: false}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    }
    default:
      return state;
  }
}

export default combineReducers({ movie, movies});
