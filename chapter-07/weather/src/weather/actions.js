import {FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload
})

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetch = (cityCode) => {
  return (dispatch) => {
    const apiUrl = `http://www.weather.com.cn/data/cityinfo/${cityCode}.html`;
    fetch(apiUrl).then((response) => {
      console.log('success ###', response);
      dispatch(fetchSuccess(response));
    }).catch((error) => {
      console.log('failure###', error);
      dispatch(fetchFailure(error));
    })
  };
}


