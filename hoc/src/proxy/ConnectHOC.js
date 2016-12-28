import React from 'react';

const doNothing = () => ({});

const connectHOC =
  (mapStateToProps=doNothing, mapDispatchToProps=doNothing) => (WrappedComponent) => {

  class HOCComponent extends React.Component {
    constructor() {
      super(...arguments);

      this.onChange = this.onChange.bind(this);

      this.store = {};
    }

    componentDidMount() {
      this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.onChange);
    }

    onChange() {
      this.setState({});
    }

    render() {
      const store = this.context.store;
      const newProps = {
        ...this.props,
        ...mapStateToProps(store.getState()),
        ...mapDispatchToProps(store.dispatch)
      }

      return <WrappedComponent {...newProps} />;
    }
  };

  HOCComponent.contextTypes = {
    store: React.PropTypes.object
  }

  return HOCComponent;
};

export default connectHOC;


