import React from 'react';

function removeIdPropHOC(WrappedComponent) {
  return function newRender(props) {
    const {user, ...otherProps} = props;
    return <WrappedComponent {...otherProps} />
  }
}

export default removeIdPropHOC;
