import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

const Weather = ({cityName, weather, lowestTemp, highestTemp}) => {
  console.log('enter render');
  if (!cityName) {
    return <div>...</div>;
  }

  return (
    <div>
      {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}
    </div>
  )
}

Weather.propTypes = {
  cityName: PropTypes.string,
  weather: PropTypes.string,
  lowestTemp: PropTypes.string,
  highestTemp: PropTypes.string
};

const mapStateTopProps = (state) => {
  const weatherData = state.weather;
  console.log('#weatherData', weatherData)
  return {
    cityName: weatherData.city,
    weather: weatherData.weather,
    lowestTemp: weatherData.temp1,
    highestTemp: weatherData.temp2
  };
}

export default connect(mapStateTopProps)(Weather);
