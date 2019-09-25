import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import styles from './main.css';

class FilterLink extends Component {
  constructor() {
    super();
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(e) {
    e.preventDefault();
    this.props.setVisibilityFilter(`SHOW_${this.props.filter.toUpperCase()}`)
  }
  render() {
    const {filter, activeFilter} = this.props;
    if(activeFilter.toLowerCase().includes(filter.toLowerCase())) {
      return (
        <span className='activeLink'>{filter}</span>
      )
    }
    return (
      <a className='link' href='' onClick={this.handleFilter}>{filter}</a>
    )
  }
}

const mapStateToProps = state => (
  {
    activeFilter: state.visibilityFilter
  }
);

export default connect(mapStateToProps, { setVisibilityFilter })(FilterLink);