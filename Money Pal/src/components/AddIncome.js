import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class AddIncome extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSaveIncome = this.handleSaveIncome.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  getInitialState() {
    return {
      text: '',
      amount: 0
  }
}
  handleSaveIncome() {
    this.props.addItem(this.state.text, this.state.amount, 'income');
    this.setState(this.getInitialState());
    this.props.toggle();
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handleAmountChange(e) {
    this.setState({ amount: e.target.value });
  }
  render() {
    const { toggle } = this.props;
    const actions = [
      <FlatButton
      label='Save'
      primary={true}
      onClick={this.handleSaveIncome} />,
      <FlatButton
      label='Cancel'
      primary={true}
      onClick={toggle} />
    ]
    return (
      <Dialog
        title="Add Income"
        modal={false}
        open={true}
        actions={actions}
        onRequestClose={toggle}>
        <div>
        <TextField hintText="Source of income" onChange={this.handleTextChange}  />
        </div>
        <div>
        <TextField hintText="Amount" onChange={this.handleAmountChange}  />
        </div>
      </Dialog>
    )
  }
}

export default  connect(null, {addItem})(AddIncome);
