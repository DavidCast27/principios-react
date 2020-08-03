import React from "react";
import "./InputForm.scss";

function InputForm(props) {
  const label = (props && props.label) || "";
  const type = (props && props.type) || "";
  const placeholder = (props && props.placeholder) || "";
  const onChange = (props && props.onChange) || "";
  if (label && type && placeholder && onChange) {
    return (
      <label>
        {label}
        <input type={type} placeholder={placeholder} onChange={onChange} />
      </label>
    );
  }
  return null;
}

export default InputForm;
