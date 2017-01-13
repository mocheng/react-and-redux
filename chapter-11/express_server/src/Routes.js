import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

import {syncHistoryWithStore} from 'react-router-redux';

import App from './pages/App.js';
import store from './Store.js';

const createElement = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

const getHomePage = (nextState, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/Home.js').default);
  }, 'home');
};

const getAboutPage = (nextState, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/About.js').default);
  }, 'about');
};

const getCounterPage = (nextState, callback) => {
  require.ensure([], function(require) {
    const {page, reducer, stateKey, initState} = require('./pages/CounterPage.js');

    initState().then((result) => {
      const state = store.getState();
      store.reset(combineReducers({
        ...store._reducers,
        counter: reducer
      }), {
        ...state,
        [stateKey]: result
      });

      callback(null, page);
    });
  }, 'counter');
};

const getNotFoundPage = (nextState, callback) => {
  require.ensure([], function(require) {
    callback(null, require('./pages/NotFound.js').default);
  }, '404');
};

const history = syncHistoryWithStore(browserHistory, store);
//const history = browserHistory;

const routes = (
  <Route path="/" component={App}>
      <IndexRoute getComponent={getHomePage} />
      <Route path="home" getComponent={getHomePage} />
      <Route path="counter" getComponent={getCounterPage} />
      <Route path="about" getComponent={getAboutPage} />
      <Route path="*" getComponent={getNotFoundPage} />
    </Route>
);


const Routes = () => (
  <Router history={history} createElement={createElement}>
    {routes}
  </Router>
);

export default Routes;


