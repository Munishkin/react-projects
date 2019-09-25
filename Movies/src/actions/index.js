import { FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS } from '../constants';
  import { fetchMoviesApi, fetchMovieApi } from '../api';

  export const fetchMoviesRequest = query => {
    return {
      type: FETCH_MOVIES_REQUEST,
      query
    }
  }

  export const fetchMoviesSuccess = data => {
    return {
      type: FETCH_MOVIES_SUCCESS,
      data
    }
  }

  export const fetchMovieRequest = id => {
    return {
      type: FETCH_MOVIE_REQUEST,
      id
    }
  }

  export const fetchMovieSuccess = data => {
    return {
      type: FETCH_MOVIE_SUCCESS,
      data
    }
  }

export const fetchMovies = query => dispatch => {
  dispatch(fetchMoviesRequest(query));
  return fetchMoviesApi(query)
            .then(data => {
              console.log(data);
              dispatch(fetchMoviesSuccess(data));
            });
}

export const fetchMovie = id => dispatch => {
  dispatch(fetchMovieRequest(id));
  return fetchMovieApi(id)
            .then(data => dispatch(fetchMovieSuccess(data)));
}