import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

const Link = ({active, children, onClick}) => {
  console.log(' #children', children);
  console.log(' #active', active);
  if (active) {
    return <b>{children}</b>;
  } else {
    return (
      <a href="#" onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}>
        {children}
      </a>
    );
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log('#state', state);
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
