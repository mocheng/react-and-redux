import React from 'react';
import {combineReducers} from 'redux';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import {match, RouterContext} from 'react-router';
import routes, {pathInitData} from './Routes.server.js';

import {configureStore} from '../src/Store.js';

function safeJSONstringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

function renderPage(req, res, renderProps, assetManifest) {
  const store = configureStore();
  const path= renderProps.location.pathname;
  const pathInfo = pathInitData[path] || {};
  const {stateKey, reducer, initState} = pathInfo;
  const statePromise = (initState) ? initState() : Promise.resolve(null);

  statePromise.then((result) => {
    if (stateKey) {
      const state = store.getState();
      store.reset(combineReducers({
        ...store._reducers,
        [stateKey]: reducer
      }), {
        ...state,
        [stateKey]: result
      });
    }

    const appHtml = ReactDOMServer.renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    const dehydratedState= store.getState();

    return res.render('index', {
      title: 'Sample React App',
      PUBLIC_URL: '/',
      assetManifest: assetManifest,
      appHtml: appHtml,
      dehydratedState: safeJSONstringify(dehydratedState)
    });
  });
}

module.exports = function(req, res, assetManifest) {
  match({routes: routes, location: req.url}, function(err, redirect, renderProps) {
    if (err) {
      return res.status(500).send(err.message);
    }

    if (redirect) {
      return res.redirect(redirect.pathname + redirect.search);
    }

    if (!renderProps) {
      return res.status(404).send('Not Found');
    }

    return renderPage(req, res, renderProps, assetManifest);
  });
};
