import React from 'react';
import {mount} from 'enzyme';
//import {expect} from 'chai-enzyme';
import {expect} from 'enzyme';

import StyleHOC from '../../src/proxy/StyleHOC.js';

describe('StyleHOC', () => {
  class DemoComponent extends React.Component {
    render() {
      return <span>do something</span>;
    }
  }

  it('should get right style', () => {
    const NewComponent = StyleHOC(DemoComponent);
    //const wrapper = mount(<NewComponent />);
    const wrapper = mount(<div style={{display: 'block'}}>hello</div>);

    console.log('####', wrapper.find('div').style);

    //expect(wrapper).to.have.style('display'); //.equal('block');
    //expect(wrapper).to.have.style('display').equal('block');
    //expect(wrapper);
  });
});



