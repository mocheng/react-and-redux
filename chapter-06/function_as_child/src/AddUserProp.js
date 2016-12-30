import React from 'react';

const loggedinUser = 'mock user';

class AddUserProp extends React.Component {
  render() {
    const user = loggedinUser;
    return this.props.children(user)
  }
}

AddUserProp.propTypes = {
  children: React.PropTypes.func.isRequired
}

export default AddUserProp;


