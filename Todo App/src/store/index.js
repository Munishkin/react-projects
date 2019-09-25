import { createStore, applyMiddleware } from 'redux';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-118964177-1');
ReactGA.pageview(window.location.pathname + window.location.search);
import reducers from '../reducers';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants';

const logger = store => next => action => {
  if(action.type === ADD_TODO) {
    ReactGA.event({
      category: 'Todo',
      action: 'Added Todo',
    });
  }  else if (action.type === DELETE_TODO) {
    ReactGA.event({
      category: 'Todo',
      action: 'Delete Todo',
    });
  } else if(action.type === TOGGLE_TODO) {
    ReactGA.event({
      category: 'Todo',
      action: 'Toggle Todo',
    });
  }
  return next(action);
}

const saveToLocalStorage = store => next => action => {
  const result = next(action);
  const todos = JSON.stringify(store.getState());
  localStorage.setItem('todos', todos);
  return result;
}

export default createStore(reducers, applyMiddleware(logger, saveToLocalStorage));