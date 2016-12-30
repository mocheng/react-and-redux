import React from 'react';

function removeUserProp(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    render() {
      const {user, ...otherProps} = this.props;
      this.props = otherProps;
      return super.render();
    }
  };
}

/*
function removeUserProp(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    render() {
      const elements = super.render();
      const {user, ...otherProps} = this.props;

      console.log('##', elements);

      return React.cloneElement(elements, otherProps, elements.props.children);
    }
  };
}
*/

export default removeUserProp;
