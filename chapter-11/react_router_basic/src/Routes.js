import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

//import {syncHistoryWithStore} from 'react-router-redux';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import {view as TopMenu} from './components/TopMenu';

//import App from './pages/App.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';
import store from './Store.js';

const history = createBrowserHistory();

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <TopMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
