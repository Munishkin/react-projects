import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
      <div className='title'>Search people</div>
      <input type='text' className='input' onChange = {this.props.changeInput} />
      </div>
    )
  }
}