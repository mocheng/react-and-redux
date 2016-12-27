import React from 'react';
import {mount} from 'enzyme';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import ConnectHOC from '../../src/proxy/ConnectHOC.js';

describe('ConnectHOC', () => {
  class DemoComponent extends React.Component {
    render() {
      return <div>anything</div>;
    }
  }

  it('should pass mapped props', () => {
    const mapState = (state) => ({
      foo: state.foo
    });
    const Connector = ConnectHOC(mapState);
    const Container = Connector(DemoComponent);
    const initialState = {foo: 'bar'};
    const store = createStore(f=>f, initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Container />
      </Provider>
    );

    expect(wrapper.find('DemoComponent').props()).toEqual({
      foo: 'bar'
    });

  });
});


