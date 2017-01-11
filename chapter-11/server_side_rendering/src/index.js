import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes.js';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <Provider store={store} >
    <Routes />,
  </Provider>
  document.getElementById('root')
);
*/
