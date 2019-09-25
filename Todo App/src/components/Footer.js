import React, { Component } from 'react';
import FilterLink from './FilterLink';
import styles from './main.css';

export default class Footer extends Component{
  render() {
    return (
      <div className='footer'>
        Show:
        <FilterLink filter='All'  />
        <FilterLink filter='Completed'  />
        <FilterLink filter='Active'  />
        </div>
    )
  }
}