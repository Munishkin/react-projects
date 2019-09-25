import React, { Component } from 'react';
import Person from './Person';

export default class PeopleList extends Component {
  render() {
    const { searchBy, people } = this.props;
    const filtered = searchBy ? people.filter(({name}) => name.indexOf(searchBy) > -1) : people;
    const list = filtered.map(({name, picture, about, index}) => <Person key={index} name={name} picture={picture} about={about} />);

    return (
      <div>
        {list}
      </div>
    )
  }
}