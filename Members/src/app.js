import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './PeopleList';
import {people} from './data';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div className='box'>
        <Search changeInput = {this.handleChange} />
        <PeopleList people={people} searchBy={this.state.text} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
