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

const END_POINT = process.env.HOST_NAME || 'localhost:9000';

const initState = () => {
  return fetch(`http://${END_POINT}/api/count`).then(response => {
    if (response.status !== 200) {
      throw new Error('Fail to fetch count');
    }
    return response.json();
  }).then(responseJson => {
    return responseJson.count;
  });
}

export {page, reducer, initState, stateKey};
