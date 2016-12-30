import React from 'react';
import {mount} from 'enzyme';

import AddUserProp from '../src/AddUserProp.js';

describe('AddUserProp', () => {
  it('should add user', () => {
    const wrapper = mount(
      <AddUserProp>
        {
          (user) => <div>{user}</div>
        }
      </AddUserProp>
    );

    const userText = wrapper.find('div').text();
    expect(userText).toEqual('mock user');

  });

});


