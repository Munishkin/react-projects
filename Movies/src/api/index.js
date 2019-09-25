import axios from 'axios';

const API_PREFIX = 'https://api.themoviedb.org/3';
const API_KEY = '8c9f0b25d628dc3a96bcc112d2c82e63';

export const fetchMoviesApi = query => {
  const params = {
    query,
    api_key: API_KEY
  };
  return axios.get(`${API_PREFIX}/search/movie`, { params })
            .then(data => data.data.results);
}

export const fetchMovieApi = id => {
  const params = {
    api_key: API_KEY
  }
  return axios.get(`${API_PREFIX}/movie/${id}`, { params })
            .then(data => data.data);
}
