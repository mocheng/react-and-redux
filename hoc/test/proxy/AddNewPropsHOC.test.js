import React from 'react';
import {shallow} from 'enzyme';

import AddNewPropsHOC from '../../src/proxy/AddNewPropsHOC.js';

describe('AddNewPropsHOC', () => {

  const DemoComponent = (props) => {
    return (
      <div>render something.</div>
    );
  };

  it('should pass new props to wrapped component', () => {
    const NewComponent = AddNewPropsHOC(DemoComponent, {foo: 'bar'});
    const wrapper = shallow(<NewComponent />);
    const expectedComponent = <DemoComponent foo="bar"/>

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

  it('should only overrides given props', () => {
    const NewComponent = AddNewPropsHOC(DemoComponent, {foo: 'bar'});
    const wrapper = shallow(<NewComponent abc="def"/>);
    const expectedComponent = <DemoComponent abc="def" foo="bar"/>

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

});
