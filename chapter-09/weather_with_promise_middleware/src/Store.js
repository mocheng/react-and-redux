import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

//import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from './middleware/promise_middleware.js';

import {reducer as weatherReducer} from './weather/';

import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf

const reducer = combineReducers({
  weather: weatherReducer
});

const middlewares = [promiseMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);

