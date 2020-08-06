import React from "react";
import "./InputForm.scss";

function InputForm(props) {
  const label = (props && props.label) || "";
  const type = (props && props.type) || "";
  const placeholder = (props && props.placeholder) || "";
  const onChange = (props && props.onChange) || null;
  const name = (props && props.name) || "";
  const value = (props && props.value) || "";

  if (label && type && placeholder && onChange) {
    return (
      <label className="inputForm">
        <span className="inputForm__label">{label}</span>
        <input className="inputForm__input" type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
      </label>
    );
  }
  return null;
}

export default InputForm;
