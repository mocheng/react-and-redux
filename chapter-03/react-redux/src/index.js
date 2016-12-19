import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ControlPanel from './views/ControlPanel';
import store from './Store.js';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel/>
  </Provider>,
  document.getElementById('root')
);
