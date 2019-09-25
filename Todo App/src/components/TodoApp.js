import React from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';
import styles from './main.css';

export default function TodoApp() {
  return (
    <div className='root'>
    <div className='container'>
    <div className='header'>Todos App from Munishkin</div>
    <div className='app'>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
    </div>
    </div>
  )
}