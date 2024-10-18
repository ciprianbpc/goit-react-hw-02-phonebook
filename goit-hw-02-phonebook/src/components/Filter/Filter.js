import React from 'react';
import './Filter.css';

function Filter({ value, onChange }) {
  return (
    <div className="Filter">
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Filter;