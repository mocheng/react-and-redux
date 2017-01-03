import promiseMiddleware from '../src/advanced.js';
import {spy} from 'sinon';

describe('advanced promise middleware', () => {
  const [PENDING, SUCCESS, FAILURE] = [1, 2, 3];
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

    it('should dispatch resolved result if promise action is fulfilled', () => {
      const result = {type: 'mock', payload: 123}
      const promiseAction = {
        promise : Promise.resolve(result),
        types : [PENDING, SUCCESS, FAILURE],
        foo : 'bar'
      };

      const nextFunc = spy();
      const actionHandler = nextHandler(nextFunc);

      actionHandler(promiseAction);

      return promiseAction.promise.then((result) => {
        expect(nextFunc.called).toBe(false);
        expect(doDispatch.callCount).toBe(2);
        expect(doDispatch.firstCall.calledWith({type: PENDING, foo: 'bar'})).toBe(true);
        expect(doDispatch.secondCall.calledWith({type: SUCCESS, result: result, foo: 'bar'})).toBe(true);
      });
    });

    it('should dispatch error if promise action is rejected', () => {
      const error = 'Sample Error';
      const promiseAction = {
        promise : Promise.reject(error),
        types : [PENDING, SUCCESS, FAILURE],
        foo : 'bar'
      };

      const nextFunc = spy();
      const actionHandler = nextHandler(nextFunc);

      actionHandler(promiseAction);

      return promiseAction.promise.catch((result) => {
        expect(nextFunc.called).toBe(false);
        expect(doDispatch.callCount).toBe(2);
        expect(doDispatch.firstCall.calledWith({type: PENDING, foo: 'bar'})).toBe(true);
        expect(doDispatch.secondCall.calledWith({type: FAILURE, error: error, foo: 'bar'})).toBe(true);
      });
    });

  });

});
