import React from 'react';

import {view as Navigation} from '../components/navigation';

const App = ({children}) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default App;
