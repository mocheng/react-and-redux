import {SELECT_CITY} from './actionTypes.js';

export default (state = '北京', action) => {
  switch(action.type) {
    case SELECT_CITY: {
      return action.cityName
    }
    default: {
      return state;
    }
  }
}
