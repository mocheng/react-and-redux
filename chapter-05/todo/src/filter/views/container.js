import React from 'react';
import Link from './link.js';
import {FilterTypes} from '../../constants.js'


const Filter = () => {
  return (
    <p>
      <Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>
      <Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>
      <Link filter={FilterTypes.UNCOMPPLETED}> {FilterTypes.UNCOMPPLETED} </Link>
    </p>
  );
};

export default Filter;
