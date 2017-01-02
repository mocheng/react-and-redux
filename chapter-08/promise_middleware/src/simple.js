function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

/*
export default function promiseMiddleware({dispatch}) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  }
}
*/

export default function promiseMiddleware({dispatch}) {
  return function(next) {
    return function(action) {
      return isPromise(action) ? action.then(dispatch) : next(action);
    }
  }
}
