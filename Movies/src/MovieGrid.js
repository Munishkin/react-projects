import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const styles = {
  container: {
    marginTop: '16px',
    marginBottom: '16px'
  }
}

class MovieGrid extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div style={styles.container}>
        { movies ?
          movies.map(movie => <MovieCard key={movie.id} id={movie.id} title={movie.original_title} overview={movie.overview} image={movie.poster_path} />)
        : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.items
  }
}

export default connect(mapStateToProps, null)(MovieGrid);