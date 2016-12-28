import React from 'react';

const OnlyForLoggedinHOC = (WrappedComponent) => {
  return class NewComponent extends WrappedComponent {
    render() {
      if (this.props.loggedIn) {
        return super.render();
      } else {
        return null;
      }
    }
  }
}

export default OnlyForLoggedinHOC;
