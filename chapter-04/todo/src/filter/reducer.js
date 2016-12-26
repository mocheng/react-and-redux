import actionTypes from './actionTypes.js';
import {FilterType} from './constants.js';

export default (state = [], action) => {
  switch(action.type) {
    case actionTypes.SET_FILTER: {
      return action.filterType;
    }
  }

  return state;
}
