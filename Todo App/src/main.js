import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const ADD_TODO = 'ADD_TODO',
        TOGGLE_TODO = 'TOGGLE_TODO',
        SHOW_ALL = 'SHOW_ALL',
        SHOW_ACTIVE = 'SHOW_ACTIVE',
        SHOW_COMPLETED = 'SHOW_COMPLETED',
        SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let todoID = 0;
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      return [ ...state, {
        id: todoID++,
        text: action.text,
        completed: false
      }];
    }
    case TOGGLE_TODO: {
      return state.map(todo =>
       todo.id === action.id ? { ...todo, completed: !todo.completed} : todo
      )
    }
    default: {
      return state;
    }
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
    return action.filter;
    default:
    return state;
  }
}

const reducers = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(reducers);

class FilterLink extends Component {
  constructor() {
    super();
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(e) {
    e.preventDefault();
    this.props.filterChange(`SHOW_${this.props.filter.toUpperCase()}`)
  }
  render() {
    const {filter, activeFilter} = this.props;
    if(activeFilter.toLowerCase().includes(filter.toLowerCase())) {
      return (
        <span>{filter}</span>
      )
    }
    return (
      <a href='' onClick={this.handleFilter}>{filter}</a>
    )
  }
}

function filtered(todos, filter) {
  switch(filter) {
    case SHOW_ALL:
    return todos;
    case SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
    default:
    return todos;
  }
}
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleChange(e) {
    this.setState({text: e.target.value})
  }
  addTodo() {
    this.props.onAddTodo(this.state.text);
    this.setState({text: ''});
  }
  handleToggle(id) {
    this.props.onToggleTodo(id);
  }
  handleFilter(filter) {
    store.dispatch({ type: SET_VISIBILITY_FILTER, filter})
  }
  render() {
    const {todos, visibilityFilter} = this.props;
    const filteredList = filtered(todos, visibilityFilter);
    return (
      <div>
      <div>Todos App from Munishkin</div>
      <input type='text' onChange={this.handleChange} value={this.state.text} />
      <button onClick={this.addTodo}>Add</button>
      <ul>
        {filteredList.map(todo =>
          <Todo key={todo.id} text={todo.text}
          completed={todo.completed} onToggle={()=> this.handleToggle(todo.id)} />)
         }
      </ul>
      <p>
      Show: {' '}
      <FilterLink filterChange={this.handleFilter} filter='All'  activeFilter = {visibilityFilter} />{' '}
      <FilterLink filterChange={this.handleFilter} filter='Completed'  activeFilter = {visibilityFilter} />{' '}
      <FilterLink filterChange={this.handleFilter} filter='Active'  activeFilter = {visibilityFilter} />
      </p>
      </div>
    )
  }
}

class Todo extends Component {
  render() {
    const {text, completed, onToggle} = this.props;
    return(
      <li
      onClick={onToggle}
      style={{textDecoration: completed ? 'line-through': 'none'}}>
      {text}
      </li>
    )
  }
}

const render = () => {
  ReactDOM.render(< TodoList {...store.getState()}
  onAddTodo={(text) => store.dispatch({ type: 'ADD_TODO', text})}
  onToggleTodo={(id) => store.dispatch({ type:'TOGGLE_TODO', id})}
  />, document.getElementById('root'))
}

render();

store.subscribe(render);
