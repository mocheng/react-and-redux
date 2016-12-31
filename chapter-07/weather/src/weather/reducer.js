import {FETCH, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH: {
      return state;
    }
    case FETCH_SUCCESS: {
      return action.payload;
    }
    case FETCH_FAILURE: {
      return action.error;
    }
    default: {
      return state;
    }
  }
}
