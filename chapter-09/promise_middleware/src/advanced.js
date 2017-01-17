function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

export default function promiseMiddleware({dispatch}) {
  return (next) => (action) => {
    const {types, promise, ...rest} = action;
    if (!isPromise(promise) || !(action.types && action.types.length === 3)) {
      return next(action);
    }

    const [PENDING, DONE, FAIL] = types;

    dispatch({...rest, type: PENDING});
    return action.promise.then(
      (result) => dispatch({...rest, result, type: DONE}),
      (error) => dispatch({...rest, error, type: FAIL})
    );
  };
}

