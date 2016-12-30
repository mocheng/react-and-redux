import React from 'react';
import {mount} from 'enzyme';

import onlyForLoggedinHOC from '../../src/inheritance/onlyForLoggedinHOC.js';

describe('RefsHOC', () => {
  class DemoComponent extends React.Component {
    render() {
      return <div>do something</div>;
    }
  }

  const NewComponent = onlyForLoggedinHOC(DemoComponent);

  it('should render inner component if loggedIn', () => {
    const wrapper = mount(<NewComponent loggedIn="sample"/>);

    expect(wrapper.find('div').length).toEqual(1);

    // Since we've using inheritance, DemoComponent is replaced by NewComponent in the
    // actual dom tree.
    expect(wrapper.contains(<DemoComponent loggedIn="sample" />)).toEqual(false);
  });

  it('should NOT render inner component if no loggedIn', () => {
    const wrapper = mount(<NewComponent />);

    expect(wrapper.find('div').length).toEqual(0);
  });
});


