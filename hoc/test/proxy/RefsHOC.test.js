import React from 'react';
import {mount} from 'enzyme';

import RefsHOC from '../../src/proxy/RefsHOC.js';

describe('RefsHOC', () => {
  class DemoComponent extends React.Component {
    render() {
      return <div>do something</div>;
    }
  }

  it('should get wrapped component by ref', () => {
    const NewComponent = RefsHOC(DemoComponent);
    const wrapper = mount(<NewComponent foo="bar"/>);

    expect(wrapper.instance()._root).toBeInstanceOf(DemoComponent);
  });
});


