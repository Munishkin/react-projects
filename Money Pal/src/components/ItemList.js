import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ContentRemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import AddIncome from './AddIncome';
import AddExpenditure from './AddExpenditure';
import Item from './Item';
import BalanceIcon from 'material-ui/svg-icons/action/account-balance-wallet';
import {cyan700} from 'material-ui/styles/colors';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      isOpenAdd: false,
      isOpenRemove: false
    }
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleRemove = this.toggleRemove.bind(this);
  }

  toggleAdd() {
    this.setState({ isOpenAdd: !this.state.isOpenAdd });
  }
  toggleRemove() {
    this.setState({ isOpenRemove: !this.state.isOpenRemove });
  }

  render() {
    const { items } = this.props;
    const { isOpenAdd, isOpenRemove } = this.state;
    const listItems = items.map(item => <Item key={item.id} id={item.id} text={item.text} amount={item.amount} category={item.category} />)
    const total = items.reduce((total, item) => {
      if(item.category === 'income') {
        return total += Number(item.amount)
      }
      return total -= Number(item.amount)}, 0);
    return (
      <div>
      <div style={{textAlign: 'center', padding: 15}}>
        <BalanceIcon color={cyan700} style={{height: 50, width: 50}} />
        <span style={{fontSize: 46, fontFamily: 'Pacifico', paddingLeft: 15}}>Money Pal</span>
      </div>
      <AppBar
       title={`${total} Balance`}
       titleStyle={{textAlign: 'center'}}
       iconElementLeft= {<IconButton><ContentAddCircleOutline /></IconButton>}
       iconElementRight= {<IconButton><ContentRemoveCircleOutline /></IconButton>}
       onLeftIconButtonClick={this.toggleAdd}
       onRightIconButtonClick={this.toggleRemove}
       />
      {isOpenAdd ?
        <AddIncome toggle={this.toggleAdd} />
      : null}

      {isOpenRemove ?
          <AddExpenditure toggle={this.toggleRemove} />
        : null}
        <List>
        {listItems}
        </List>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
    items: state
  }
}

export default connect(mapStateToProps, null )(ItemList);
