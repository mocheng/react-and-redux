import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './pages/App.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
