import React, { Component } from 'react';

export default class Person extends Component {
  render() {
    const {name, picture, about} = this.props;
    return (
      <div className='card'>
        <img src={picture} className='avatar' />
        <div className='content'>
          <p>{name}</p>
          <div>{about}</div>
        </div>
      </div>
    )
  }
}