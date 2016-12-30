import React from 'react';
import {mount, shallow} from 'enzyme';

import removeUserPropHOC from '../../src/proxy/removeUserPropHOC.js';

describe('removeUserPropHOC', () => {

  const DemoComponent = (props) => {
    return (
      <div>render something.</div>
    );
  };

  it('should pass new props to wrapped component', () => {
    const NewComponent = removeUserPropHOC(DemoComponent);
    const wrapper = mount(<NewComponent user="sampleUser" foo="bar"/>);
    const expectedComponent = <DemoComponent foo="bar"/>

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

});
