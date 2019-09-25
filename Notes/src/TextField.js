import React, { Component } from 'react';
import Colors from './Colors';

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      color: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSave() {
    this.props.onSave(this.state.text, this.state.color);
    this.setState({
      text: '',
      color: ''
    })
  }

  handleColor(code) {
    this.setState({
      ...this.state,
      color: code
    })
  }

  render() {
    return (
      <div className='editor'>
      <textarea
        className='textArea'
        rows={5}
        placeholder='Please enter your note here'
        onChange={this.handleChange}
        value={this.state.text}
      ></textarea>
      <Colors onSelect={this.handleColor} />
      <button className='editor_button' onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}