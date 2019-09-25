import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { fetchMovie } from './actions';

const styles = {
  container: {
    display: 'flex',
    maxWidth: 800,
    margin: '16 auto'
  },
  image: {
    width: 200
  },
  info: {
    display: 'flex',
    padding: 16,
    margin: 16
  }
}

class Movie extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchMovie(+this.props.match.params.id);
  }
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <Paper style={styles.container}>
        <img style={styles.image} src={movie.poster_path? `http://image.tmdb.org/t/p/w200${movie.poster_path}` : '/img/no-poster.jpg'} />
        <div style={styles.info}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie.data
  }
}
export default connect(mapStateToProps, { fetchMovie })(Movie);