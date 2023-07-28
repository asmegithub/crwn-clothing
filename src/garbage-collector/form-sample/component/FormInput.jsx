/** @format */

import React from "react";

import "./form-input.css";

const FormInput = ({ label, ...props }) => {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...props} onChange={(e) => props.setUsername(e.target.value)} />
    </div>
  );
};

export default FormInput;
