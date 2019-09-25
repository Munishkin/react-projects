import { REMOVE_ITEM, ADD_ITEM } from '../constants';
let itemID = 0;
export default function Reducer (state = [], action) {
  switch(action.type) {
    case ADD_ITEM: {
      return [...state, {
        id: itemID++,
        text: action.text,
        amount: action.amount,
        category: action.category
      }];
    }
    case REMOVE_ITEM: {
      return state.filter(item => item.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
