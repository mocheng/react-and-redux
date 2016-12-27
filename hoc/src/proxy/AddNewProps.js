import React from 'react';

const AddNewProps = (WrappedComponent, newProps) => {
  return class WrappingComponent extends React.Component {
    render() {
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

export default AddNewProps;
