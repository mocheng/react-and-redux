import * as ActionTypes from './actionTypes.js';

export const increment = (counterCaption) => ({
  type: ActionTypes.INCREMENT,
  counterCaption: counterCaption
});

export const decrement = (counterCaption) => ({
  type: ActionTypes.DECREMENT,
  counterCaption: counterCaption
});
