import React, { Component } from 'react';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteNote(this.props.id);
  }
  render() {
    const { text, color } = this.props;
    const style = color ? {backgroundColor: color} : null;
    return (
      <div className='note' style={style}>{ text }
          <span className='note_delete-icon' onClick={this.handleClick}>x</span>
        </div>
    )
  }
}