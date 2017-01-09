import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './pages/App.js';
//import Home from './pages/Home.js';
//import About from './pages/About.js';
//import NotFound from './pages/NotFound.js';

const getHomePage = (location, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/Home.js').default);
  }, 'home');
};

const getAboutPage = (location, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/About.js').default);
  }, 'about');
};

const getNotFoundPage = (location, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/NotFound.js').default);
  }, '404');
};

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute getComponent={getHomePage} />
      <Route path="home" getComponent={getHomePage} />
      <Route path="about" getComponent={getAboutPage} />
      <Route path="*" getComponent={getNotFoundPage} />
    </Route>
  </Router>
);

export default Routes;
