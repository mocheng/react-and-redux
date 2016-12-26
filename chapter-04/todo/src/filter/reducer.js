import {SET_FILTER} from './actionTypes.js';

export default (state = [], action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.filterType;
    }
  default:
    return state;
  }
}
