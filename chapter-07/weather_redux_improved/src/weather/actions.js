import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

let nextSeqId = 0;

export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchWeatherFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetchWeather = (cityCode) => {
  return (dispatch) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;

    const seqId = ++ nextSeqId;

    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action);
      }
    }

    dispatchIfValid(fetchWeatherStarted())

    fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      response.json().then((responseJson) => {
        dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
      }).catch((error) => {
        dispatchIfValid(fetchWeatherFailure(error));
      });
    }).catch((error) => {
      dispatchIfValid(fetchWeatherFailure(error));
    })
  };
}


