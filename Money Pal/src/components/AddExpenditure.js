import React, { Component } from 'react';
import { addItem } from '../actions';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { connect } from 'react-redux';

class AddExpenditure extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSaveExpenditure = this.handleSaveExpenditure.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  getInitialState() {
    return {
      text: '',
      amount: 0,
      category: 1
  }
}
  handleSaveExpenditure() {
    const { text, amount, category } = this.state;
    this.props.addItem(text, amount, category);
    this.setState(this.getInitialState());
    this.props.toggle();
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handleAmountChange(e) {
    this.setState({ amount: e.target.value });
  }
  handleCategoryChange(e, index, value) {
    this.setState({ category: value });
  }
  render() {
    const { toggle } = this.props;
    const actions = [
      <FlatButton
      label='Save'
      primary={true}
      onClick={this.handleSaveExpenditure} />,
      <FlatButton
      label='Cancel'
      primary={true}
      onClick={toggle}
      />
    ];
    return (
      <Dialog
        title="Add Expenditure"
        modal={false}
        open={true}
        actions={actions}
        onRequestClose={this.toggleRemove}>
        <div>
        <TextField hintText="Source of expendetures" onChange={this.handleTextChange} />
        </div>
        <div>
        <TextField hintText="Amount" onChange={this.handleAmountChange}  />
        </div>
        <div>
        <DropDownMenu value={this.state.category} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Miscelaneous" />
          <MenuItem value={2} primaryText="Shopping" />
          <MenuItem value={3} primaryText="Dining out" />
          <MenuItem value={4} primaryText="Movie night" />
        </DropDownMenu>
        </div>
      </Dialog>
    )
  }
}

export default connect(null, { addItem })(AddExpenditure);
