import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

import App from '../src/pages/App.js';
import Home from '../src/pages/Home.js';
import {page as CounterPage, reducer, stateKey, initialState} from '../src/pages/CounterPage.js';
import About from '../src/pages/About.js';
import NotFound from '../src/pages/NotFound.js';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="counter" component={CounterPage} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);

const Routes = (
  <Router history={browserHistory} >
    {routes}
  </Router>
);

const routeInitialState = {
  '/counter': {
    [stateKey]: initialState
  }
}

const routeReducer = {
  '/counter': {
    [stateKey]: reducer
  }
}

export {routeInitialState, routeReducer};

export default Routes;
