import React , { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    marginBottom: 16
  },
  img: {
    height: 278,
    width: 185,
    minWidth: 200
  },
  title: {
    fontSize: 18,
    fontWeight: 500
  },
  overview: {
    color: 'grey',
    fontSize: 14
  },
  info: {
    marginLeft: 16,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  actions: {
    display: 'flex',
    padding: 8,
    justifyContent: 'center'
  }
}
export default class MovieCard extends Component {
  render() {
    const {id, title, overview, image} = this.props;
    const imgURL = image? `http://image.tmdb.org/t/p/w200${image}` : '/img/no-poster.jpg';
    return (
      <Paper style={styles.container} >
        <img style={styles.img} src={imgURL} />
        <div style={styles.info} >
          <div>
            <h1 style={styles.title}>{title}</h1>
            <p style={styles.overview}>{overview}</p>
          </div>
          <div>
            <Divider />
            <div style={styles.actions}>
              <Link to={`/movies/${id}`}>
                <FlatButton label='More info'/>
              </Link>
            </div>
          </div>
        </div>
      </Paper>
    )
  }
}
