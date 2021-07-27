import React from 'react';

export default function Email({ emailId, handleChange, errors }) {
  return (
    <div>
      <label>Email Id : </label>
      <input
        type="email"
        name="emailId"
        value={emailId}
        onChange={handleChange}
      />
      <span>{errors ? errors : <></>}</span>
    </div>
  );
}
