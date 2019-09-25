import { ADD_ITEM, REMOVE_ITEM } from '../constants';

export const addItem = (text, amount = 50, category = 'miscelaneous') => {
  return {
    type: ADD_ITEM,
    text,
    amount,
    category
  }
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  }
};
