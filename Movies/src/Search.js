import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';

const styles = {
  container: {
    display: 'flex',
    padding: '8px 16px',
    alignItems: 'center',
  },
  button: {
    marginLeft: 16
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state ={
      text: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleTextChange(e) {
    this.setState({text: e.target.value})
  }
  handleSearch() {
    this.props.fetchMovies(this.state.text);
    this.setState({ text: ''});
    this.props.onChange();
  }
  render() {
    const { text } = this.state;
    return (
      <Paper style={styles.container}>
        <TextField
        fullWidth
        underlineShow={false}
        hintText='Search'
        value={text}
        onChange={this.handleTextChange}
        />
        <Link to={`?${text}`}>
          <RaisedButton
          style={styles.button}
          label='Search'
          disabled={!text}
          onClick={this.handleSearch}
          />
        </Link>
      </Paper>
    )
  }
}

export default connect(null, { fetchMovies })(Search);
