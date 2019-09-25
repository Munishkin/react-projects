import React, { Component } from 'react';
import styles from './main.css';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      button: 'Edit',
      todoText: ''
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleEdit() {
    this.setState({
      button: this.state.button === 'Edit' ? 'Save' : 'Edit'
    })
  }
  handleTextChange(e) {
    this.setState({
      todoText: e.target.value
    })
  }
  render() {
    const {text, completed, onToggle, onDelete, dueDate} = this.props;
    const { button } = this.state;
    const date = new Date(dueDate);
    const output = button === 'Save' ?
    <input onChange={this.handleTextChange} /> :
    text;
    return(
      <div
      onClick={onToggle}
      className={completed ? 'completed' : 'notCompleted'}>
      {date.getTime() < Date.now() ? <span className='red'>||</span> : null}
      {output}
      <button onClick={this.handleEdit} className='edit'>{this.state.button}</button>
      <span className='delete' onClick={onDelete}>x</span>
      </div>
    )
  }
}