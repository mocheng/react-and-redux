import React from 'react';

const modifyPropsHOC = (WrappedComponent) => {
  return class NewComponent extends WrappedComponent {
    render() {
      const elements = super.render();

      const newStyle = {
        color: (elements && elements.type === 'div') ? 'red' : 'green'
      }
      const newProps = {...this.props, style: newStyle};

      return React.cloneElement(elements, newProps, elements.props.children);
    }
  };
};

export default modifyPropsHOC;
