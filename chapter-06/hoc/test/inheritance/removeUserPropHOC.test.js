import React from 'react';
import {mount, shallow} from 'enzyme';

import removeUserPropHOC from '../../src/inheritance/removeUserPropHOC.js';

describe('removeUserPropHOC', () => {

  class DemoComponent extends React.Component {
    render() {
      return (
        <div>{this.props.user || 'no_user'}</div>
      );
    }
  }

  it('should pass new props to wrapped component', () => {
    const NewComponent = removeUserPropHOC(DemoComponent);
    const wrapper = mount(<NewComponent user="sampleUser" foo="bar"/>);
    const expectedComponent = <div>no_user</div>;

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

});
