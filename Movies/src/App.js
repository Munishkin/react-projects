import React, { Component } from 'react';
import Search from './Search';
import MovieGrid from './MovieGrid';
import { fetchMovies } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange() {
    const { history, location } =this.props;
    history.push({
      pathname: location.pathname,
      query: location.search
    })
  }

  componentDidMount() {
    const query = this.props.location.search
    if(query) {
      this.props.fetchMovies(query);
    }
  }
  render() {
    return (
      <div>
        <Search onChange={this.handleSearchChange}/>
        <MovieGrid />
      </div>
    )
  }
}

export default connect(null, { fetchMovies })(App);
