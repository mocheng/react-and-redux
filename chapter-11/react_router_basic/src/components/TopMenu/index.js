import React from 'react';

import {Link} from 'react-router-dom';

const liStyle = {
  display: 'inline-block',
  margin: '10px 20px'
}

const view = () => {
  return (
    <div>
      <ul>
        <li style={liStyle}><Link to="/">Home</Link></li>
        <li style={liStyle}><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};

export {view};
