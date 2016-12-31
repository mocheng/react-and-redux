import React from 'react';
import {connect} from 'react-redux'

const Weather = ({cityName, weather, temperatureRange}) => {
  if (!cityName) {
    return null;
  }

  return (
    <div>
      {cityName} {Weather}
      最低气温 {temperatureRange[0]} 最高气温 {temperatureRange[1]}
    </div>
  )
}

export default connect()(Weather);
