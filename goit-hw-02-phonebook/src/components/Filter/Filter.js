import React from 'react';
import './Filter.css';

function Filter({ value, onChange }) {
  return (
    <input
      className="Filter"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  );
}

export default Filter;