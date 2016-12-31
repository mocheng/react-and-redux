import {FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export const fetchWeatherSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload
})

export const fetchWeatherFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetchWeather = (cityCode) => {
  console.log('#enter fetchWeather');

  return (dispatch) => {
   console.log('### enter thunk');
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    fetch(apiUrl, {
       mode: 'cors'
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      console.log('success ###', response);
      response.json().then((responseJson) => {
        console.log('final dispatch')
        dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
      }).catch((error) => {
        throw new Error('Invalid json response: ' + error)
      });
    }).catch((error) => {
      console.log('failure###', error);
      dispatch(fetchWeatherFailure(error));
    })
  };
}


