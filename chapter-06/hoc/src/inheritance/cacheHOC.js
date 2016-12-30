import React from 'react';

const cacheHOC = (WrappedComponent) => {
  return class NewComponent extends WrappedComponent {
    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.useCache;
    }
  }
}

export default onlyForLoggedinHOC;
