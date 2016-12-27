import React from 'react';

const RefsHOC = (WrappedComponent) => {
  return class HOCComponent extends React.Component {
    constructor() {
      super(...arguments);

      this.linkRef = this.linkRef.bind(this);
    }

    linkRef(wrappedInstance) {
      this._root = wrappedInstance;
    }

    render() {
      const props = {...this.props, ref: this.linkRef};
      return <WrappedComponent {...props}/>;
    }
  };
};

export default RefsHOC;
