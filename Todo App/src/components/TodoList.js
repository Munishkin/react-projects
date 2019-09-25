import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import FilterLink from './FilterLink';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED, SET_VISIBILITY_FILTER } from '../constants';
import { toggleTodo, deleteTodo } from '../actions';

class TodoList extends Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.deleteTodo(id);
  }

  handleToggle(id) {
    this.props.toggleTodo(id);
  }
  render() {
    const {todos, visibilityFilter} = this.props;
    const filteredList = filtered(todos, visibilityFilter);
    return (
      <div>
        {filteredList.map(todo =>
          <Todo key={todo.id} text={todo.text} onDelete={() => this.handleDelete(todo.id)}
          completed={todo.completed} onToggle={()=> this.handleToggle(todo.id)} dueDate={todo.dueDate} />)
         }
      </div>
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

const mapStateToProps = state => (
  {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
);

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);