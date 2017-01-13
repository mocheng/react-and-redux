import React from 'react';
import {view as Counter, stateKey, reducer} from '../components/Counter';

const page = () => {
  return (
    <div>
      <div>Counter</div>
      <Counter value={0} />
    </div>
  );
};

const initState = () => Promise.resolve(100);

export {page, reducer, initState, stateKey};
