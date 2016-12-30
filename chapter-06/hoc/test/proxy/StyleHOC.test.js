import React from 'react';
import {mount} from 'enzyme';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

const {expect} = chai;


import styleHOC from '../../src/proxy/styleHOC.js';

describe('styleHOC', () => {

  class DemoComponent extends React.Component {
    render() {
      return <span style={{color: 'green'}}>do something</span>;
    }
  }

  it('should get right style', () => {
    const NewComponent = styleHOC(DemoComponent, {color: 'red'});

    const wrapper = mount(<NewComponent />);

    expect(wrapper.find('div')).to.have.style('color').equal('red');
    expect(wrapper.find('span')).to.have.style('color').equal('green');
  });
});



