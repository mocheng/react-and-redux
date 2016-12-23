import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './views/ControlPanel';
import './index.css';

import store from './Store.js';
import Provider from './Provider.js';

ReactDOM.render(
  <Provider store={store}>
    <ControlPanel />
  </Provider>,
  document.getElementById('root')
);
