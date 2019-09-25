import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import DatePicker from './DatePicker';
import styles from './main.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDueDate = this.handleDueDate.bind(this);
  }
  handleChange(e) {
    this.setState({text: e.target.value})
  }
  handleClick(e) {
      this.props.addTodo(this.state.text, this.state.dueDate);
      this.setState({text: '', dueDate: ''});
  }
  handleDueDate(date) {
    this.setState({
      dueDate: date
    })
  }
  render() {
    return(
      <div className='input-box'>
        <input placeholder='Enter Todo task' className='input' type='text' onChange={this.handleChange} value={this.state.text} />
        <div>
        <DatePicker selected={this.state.dueDate} onChange={this.handleDueDate}/>
        <button onClick={this.handleClick}  className='saveTodo'>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addTodo })(AddTodo);
