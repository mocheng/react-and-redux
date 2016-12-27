import React from 'react';
import {shallow} from 'enzyme';

import AddNewProps from '../../src/proxy/AddNewProps.js';

describe('AddNewProps', () => {

  const DemoComponent = (props) => {
    return (
      <div>render something.</div>
    );
  };

  it('should pass new props to wrapped component', () => {
    const NewComponent = AddNewProps(DemoComponent, {foo: 'bar'});
    const wrapper = shallow(<NewComponent />);
    const expectedComponent = <DemoComponent foo="bar"/>

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

  it('should only overrides given props', () => {
    const NewComponent = AddNewProps(DemoComponent, {foo: 'bar'});
    const wrapper = shallow(<NewComponent abc="def"/>);
    const expectedComponent = <DemoComponent abc="def" foo="bar"/>

    expect(wrapper.contains(expectedComponent)).toEqual(true);
  });

});
