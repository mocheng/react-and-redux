import {FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_SUCCESS: {
      return state;
    }
    case FETCH_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
