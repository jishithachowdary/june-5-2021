import React from 'react';

export default function Gender({ gender, handleChange, errors }) {
  return (
    <div>
      <label>Gender : </label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === 'male'}
        onChange={handleChange}
      />
      <label>Male</label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === 'female'}
        onChange={handleChange}
      />
      <label>Female</label>
      <input
        type="radio"
        name="gender"
        value="other"
        checked={gender === 'other'}
        onChange={handleChange}
      />
      <label>Other</label>
      <span>{errors ? errors : <></>}</span>
    </div>
  );
}
