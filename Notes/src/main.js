import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from './TextField';
import NoteGrid from './NoteGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    this.handleAddNode = this.handleAddNode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes
    })
  }

  handleAddNode(text, color) {
    this.setState({
      notes: [...this.state.notes, {id: Date.now(), text, color}]
    })
  }

  componentDidMount() {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if(notes) {
      this.setState({ notes });
    }
  }

  componentDidUpdate() {
    const notes = JSON.stringify(this.state.notes);
    if (notes) {
      localStorage.setItem('notes', notes);
    }
  }

  render() {
    return (
      <div className='app'>
      <h1 className='title'>Munishkin Notes</h1>
        <TextField onSave={this.handleAddNode} />
        <NoteGrid notes = {this.state.notes} handleDeleteNote = {this.handleDelete} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);