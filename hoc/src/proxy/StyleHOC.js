import React from 'react';

const style = {
  display: 'block'
};

const styleHOC = (WrappedComponent) => {
  return class HOCComponent extends React.Component {
    render() {
      return (
        <div className="wrapper" style={style}>
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  };
};

export default styleHOC;


