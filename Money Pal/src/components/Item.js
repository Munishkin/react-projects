import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {grey500} from 'material-ui/styles/colors';
import { removeItem } from '../actions';
import { connect } from 'react-redux';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import Theaters from 'material-ui/svg-icons/action/theaters';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import ArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import IconButton from 'material-ui/IconButton';

const categories = {
  1: "ArrowUpward",
  2: "ShoppingBasket",
  3: "Restaurant",
  4: "Theaters",
  income: "ArrowDownward"
}

class Item extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.removeItem(this.props.id)
  }
  render() {
    const { id, text, category, amount } = this.props;
    console.log(amount);
    const button = (
      <IconButton onClick={this.handleDelete}>
        {amount } <ActionDelete color={'FFF'} hoverColor={grey500} />
      </IconButton>
    );
    return <ListItem key={id}
    primaryText={`${text} - ${Number(amount)}`}
    rightIconButton={button} />
  }
}

export default connect(null, { removeItem })(Item);
