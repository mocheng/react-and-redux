//import {createStore, compose} from 'redux';
//const reducer = f => f;
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {routerReducer} from 'react-router-redux';

const reducer = combineReducers({
  routing: routerReducer
});

const win = window;

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const initialState = {};
//const initialState = {};
export default createStore(reducer, initialState, storeEnhancers);

