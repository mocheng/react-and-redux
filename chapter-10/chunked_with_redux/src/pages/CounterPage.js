import React from 'react';
import {view as Counter} from '../components/Counter';

const CounterPage = () => {
  return (
    <div>
      <div>Counter</div>
      <Counter caption="any"/>
    </div>
  );
};

export default CounterPage;
