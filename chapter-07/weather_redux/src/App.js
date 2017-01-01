import React, { Component } from 'react';

import {view as CitySelector} from './city_selector/';
import {view as Weather} from './weather/';

class App extends Component {
  render() {
    return (
      <div>
        <CitySelector />
        <Weather />
      </div>
    );
  }
}

export default App;
