import resetEnhancer from '../src/reset.js';
import {createStore} from 'redux';

describe('reset enhancer', () => {
  const configureStore = (reducer) => {
    return createStore(reducer, resetEnhancer);
  };

  let store;

  beforeEach(() => {
    const reducer = (state, action) => ({payload: action.payload});
    store = configureStore(reducer);
  });

  it('should not break store functionality', () => {
    store.dispatch({type: 'any', payload: 'bar'});

    expect(store.getState()).toEqual({payload: 'bar'});
  });

  it('reset', () => {
    it('should reset state and reducer', () => {
      const newReducer = (state, action) =>({newPayload: action.payload});
      const newState = {newPayload: 'new'};

      store.reset(newReducer, newState);
      expect(store.getState()).toEqual(newState);

      store.dispatch({type: 'any', payload: 'changed'});
      expect(store.getState()).toEqual({newPayload: 'changed'});
    });
  });
});
