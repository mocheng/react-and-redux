import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';

import CountDown from '../src/CountDown.js';

describe('CountDown', () => {
  it('should count down', (done) => {
    const counter = spy();
    const wrapper = mount(
      <CountDown startCount={2}>
        {
          (count) => {
            counter();
            if (count === 0) {
              expect(counter.callCount).toEqual(3);
              done();
            }
            return null;
          }
        }
      </CountDown>
    );
  });

});


