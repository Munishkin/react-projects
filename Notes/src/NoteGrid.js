import React, { Component } from 'react';
import Note from './Note';
import Masonry from 'react-masonry-component';

const options = {
  columnWidth: 250,
  gutter: 10,
  isFitWidth: true
}

export default class NoteGrid extends Component {
  render() {
    const { notes, handleDeleteNote } = this.props;
    const listOfNotes = notes.map(note => <Note key={note.id} id={note.id} text={note.text} color={note.color} deleteNote={handleDeleteNote}/>)
    return (
      <Masonry className='grid'
      options = {options}>
        {listOfNotes}
      </Masonry>
    )
  }
}