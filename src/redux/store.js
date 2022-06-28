import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state => state.columns);

// action creators
export const addColumn = newColumn => ({ type: 'ADD_COLUMN', newColumn });

export const addCard = newCard => ({ type: 'ADD_CARD', newCard});

export const updatSearchString = newSearchString => ({ type: 'UPDATE_SEARCHSTRING', newSearchString});

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_COLUMN':
      return {  ...state, columns: [...state.columns, {...action.newColumn, id: shortid()}]};
    case 'ADD_CARD':
      return {  ...state, cards: [...state.cards, {...action.newCard, id: shortid()}]};
    case 'UPDATE_SEARCHSTRING':
      return {...state, ...action.newSearchString};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;