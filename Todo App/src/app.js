import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoApp from './components/TodoApp';
import './components/main.css';

function App() {
  return (
    <Provider store = {store}>
      <TodoApp />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));