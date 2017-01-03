'use strict';

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

export default function promiseMiddleware({dispatch}) {
  return (next) => (action) => {
    if (!isPromise(action)) {
      return next(action);
    }

    if (!(action.types && action.types.length === 3)) {
      return;
    }

    const {types, ...rest} = action;
    const [PENDING, DONE, FAIL] = types;

    dispatch({...rest, type: PENDING});
    return action.then(
      (result) => dispatch({...rest, result, type: DONE}),
      (error) => dispatch({...rest, error, type: FAIL})
    );
  };
}

