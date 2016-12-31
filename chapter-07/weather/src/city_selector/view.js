import React from 'react';

import {cityCodes} from '../constants.js'

const CitySelector = () => (
  <select>
    {
      Object.keys(cityCodes).map(
        cityName => <option key={cityName} value={cityCodes[cityName]}>{cityName}</option>
      )
    }
  </select>
);

export default CitySelector;

