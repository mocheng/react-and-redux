import {SELECT_CITY} from './actionTypes.js';

//import {cityCodes} from '../constants.js';

export const selectCity = (cityName) => {
  return {
    type: SELECT_CITY,
    cityName
  };
}
