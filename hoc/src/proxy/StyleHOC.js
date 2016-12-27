import React from 'react';

const style = {
  display: 'block'
};

const StyleHOC = (WrappedComponent) => {
  return class HOCComponent extends React.Component {
    render() {
      return (
        <div style={style}>
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  };
};

export default StyleHOC;


