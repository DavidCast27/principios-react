import React, { useState } from "react";
import "./InputForm.scss";
import { inputValidate } from "../../common/js/validator";

function InputForm(props) {
  const label = (props && props.label) || "";
  const type = (props && props.type) || "";
  const placeholder = (props && props.placeholder) || "";
  const onChange = (props && props.onChange) || null;
  const name = (props && props.name) || "";
  const value = (props && props.value) || "";
  const minLength = (props && props.minLength) || "";
  const maxLength = (props && props.maxLength) || "";
  const required = (props && props.required) || false;
  const messageError = (props && props.messageError) || "";
  if (label && type && placeholder && onChange) {
    return (
      <label className="inputForm">
        <span className="inputForm__label">{label}</span>
        <input
          className={"inputForm__input"}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          onChange={onChange}
        />
        {messageError && (
          <span className="inputForm__messageError"> {messageError}</span>
        )}
      </label>
    );
  }
  return null;
}

export default InputForm;
