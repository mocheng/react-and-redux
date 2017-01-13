import React from 'react';
import {view as Counter, stateKey, reducer} from '../components/Counter';

const caption = "any";

const page = () => {
  return (
    <div>
      <div>Counter</div>
      <Counter value={0} caption={caption}/>
    </div>
  );
};

const initState = () => Promise.resolve({
    [caption]: 100
});

export {page, reducer, initState, stateKey};
