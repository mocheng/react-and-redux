import React from 'react';
import {mount} from 'enzyme';

import refsHOC from '../../src/proxy/refsHOC.js';

describe('refsHOC', () => {
  class DemoComponent extends React.Component {
    render() {
      return <div>do something</div>;
    }
  }

  it('should get wrapped component by ref', () => {
    const NewComponent = refsHOC(DemoComponent);
    const wrapper = mount(<NewComponent foo="bar"/>);

    expect(wrapper.instance()._root).toBeInstanceOf(DemoComponent);
  });
});


