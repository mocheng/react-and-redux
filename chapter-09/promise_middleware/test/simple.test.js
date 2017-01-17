import promiseMiddleware from '../src/simple.js';
import {spy} from 'sinon';

describe('simple promise middleware', () => {
  let doDispatch, doGetState, nextHandler;

  beforeEach(() => {
    doDispatch = spy();
    doGetState = spy();
    nextHandler = promiseMiddleware({dispatch: doDispatch, getState: doGetState});
  });

  it('should return a function to handle action', () => {
    const actionHandler = nextHandler();

    expect(typeof actionHandler === 'function').toBe(true);
    expect(actionHandler.length).toBe(1);
  });

  describe('handle action', () => {
    it('should pass action to next if it is not promise', (done) => {
      const objectAction = {type: 'mock', payload: 123};
      const actionHandler = nextHandler((action) => {
        expect(action).toBe(objectAction);
        done();
      });

      actionHandler(objectAction);
    });

    it('should NOT pass action to next if it is a promise', (done) => {
      const objectAction = {type: 'mock', payload: 123};
      const promiseAction = Promise.resolve(objectAction);
      const nextFunc = spy();
      const actionHandler = nextHandler(nextFunc);

      actionHandler(promiseAction);

      promiseAction.then(() => {
        expect(nextFunc.called).toBe(false);
        expect(doDispatch.calledOnce).toBe(true);
        expect(doDispatch.calledWith(objectAction)).toBe(true);
        done();
      });
    });

    it('should drop action if promise fails', (done) => {
      const errorMessage = 'game over';
      const promiseAction = Promise.reject(errorMessage);
      const nextFunc = spy();
      const actionHandler = nextHandler(nextFunc);

      actionHandler(promiseAction);

      promiseAction.catch((err) => {
        expect(nextFunc.called).toBe(false);
        expect(doDispatch.called).toBe(false);
        done();
      });
    });

  });

});
