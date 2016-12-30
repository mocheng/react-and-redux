import React from 'react';

const doNothing = () => ({});

function connect(mapStateToProps=doNothing, mapDispatchToProps=doNothing) {
  return function(WrappedComponent) {
    class HOCComponent extends React.Component {
      constructor() {
        super(...arguments);

        this.onChange = this.onChange.bind(this);

        this.store = {};
      }

      shouldComponentUpdate(nextProps, nextState) {
        for (const propType in nextProps) {
          if (nextProps.hasOwnProperty(propType)) {
            if (nextProps[propType] === this.props[propType]) {
              return true;
            }
          }
        }

        for (const propType in this.props) {
          if (this.props.hasOwnProperty(propType)) {
            if (nextProps[propType] === this.props[propType]) {
              return true;
            }
          }
        }

        return false;
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
}

export default connect;


