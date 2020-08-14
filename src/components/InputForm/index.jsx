import React from "react";
import "./InputForm.scss";

function InputForm(props) {
  const label = (props && props.label) || "";
  const type = (props && props.type) || "";
  const placeholder = (props && props.placeholder) || "";
  const onChange = (props && props.onChange) || null;
  const name = (props && props.name) || "";
  const value = (props && props.value) || "";

  const isValid = props && props.isValid;
  const messageError = (props && props.messageError) || "";

  console.log(isValid, messageError);
  if (label && type && placeholder && onChange) {
    return (
      <label className="inputForm">
        <span className="inputForm__label">{label}</span>
        <input
          className={`inputForm__input ${
            !isValid && messageError ? "inputForm__input--error" : ""
          }`}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {!isValid && messageError && (
            <span className="inputForm__messageError"> {messageError}</span>
          )}
      </label>
    );
  }
  return null;
}

export default InputForm;
