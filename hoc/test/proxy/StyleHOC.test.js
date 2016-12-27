import React from 'react';
import {mount} from 'enzyme';

import StyleHOC from '../../src/proxy/StyleHOC.js';

describe('StyleHOC', () => {
  class DemoComponent extends React.Component {
    render() {
      return <span>do something</span>;
    }
  }

  it('should get right style', () => {
    const NewComponent = StyleHOC(DemoComponent);
    const wrapper = mount(<NewComponent />);

    expect(wrapper.find('div').hasClass('styled')).toEqual(true);
  });
});



