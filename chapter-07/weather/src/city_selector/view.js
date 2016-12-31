import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {CITY_CODES} from '../constants.js';
import {actions as weatherActions} from '../weather/';
import {selectCity} from './actions.js';

console.log('#weatherActions', weatherActions)

class CitySelector extends React.Component {
  constructor() {
    super(...arguments);

    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const cityCode = ev.target.value;
    this.props.onSelectCity(cityCode)
  }

  componentDidMount() {
    const defaultCity = Object.keys(CITY_CODES)[0];
    this.props.onSelectCity(CITY_CODES[defaultCity]);
  }

  render() {
    return (
      <select onChange={this.onChange}>
        {
          Object.keys(CITY_CODES).map(
            cityName => <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
          )
        }
      </select>
    );
  }
}

CitySelector.propTypes = {
  onSelectCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCity: (cityCode) => {
      dispatch(weatherActions.fetchWeather(cityCode));
      dispatch(selectCity(cityCode))
    }
  }
};

export default connect(null, mapDispatchToProps)(CitySelector);

