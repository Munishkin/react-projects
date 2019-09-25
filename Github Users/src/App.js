import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import './main.css';
import { fetchUsers, selectLanguage } from './actions';
import Users from './Users';
import Loading from './Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "javascript",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value}, function(){
      this.props.selectLanguage(this.state.value);
      this.props.fetchUsers(this.state.value);
    });
  }
  componentDidMount() {
    this.props.fetchUsers('javascript');
  }
  render() {
    const { users, fetching } = this.props;
  return (
      <div className='container'>
      <SelectField
        floatingLabelText="Select language"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={'javascript'} primaryText="Javascript" />
        <MenuItem value={'c++'} primaryText="C++" />
        <MenuItem value={'python'} primaryText="Python" />
        <MenuItem value={'java'} primaryText="Java" />
        <MenuItem value={'ruby'} primaryText="Ruby" />
      </SelectField>
      {
        fetching ? <Loading /> : <Users users={users} />
      }
      </div>
  );
  }
}

const mapStateToProps = state => {
  const users = state.users[state.language] || {};
  return {
    users: users.items || [],
    fetching: users.fetching,
  };
}

export default connect(mapStateToProps, { fetchUsers, selectLanguage })(App);