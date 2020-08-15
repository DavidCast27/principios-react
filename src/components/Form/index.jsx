import React from "react";
import _map from "lodash/map";
import _get from "lodash/get";
import InputForm from "../InputForm";
import CustomButton from "../CustomButton";
import "./Form.scss";
import { values } from "lodash";

function Form(props) {
  const title = (props && props.title) || "";
  const formName = (props && props.formName) || "";
  const onSubmit = (props && props.onSubmit) || null;
  const buttonText = (props && props.buttonText) || "";
  const fields = (props && props.fields) || [];
  const onChange = (props && props.onChange) || null;
  const onReset = (props && props.onReset) || null;

  return (
    <div className="form">
      <h1 className="form__title">{title}</h1>
      <form
        name={`${formName} form`}
        className="form__body body"
        onSubmit={onSubmit}
        onReset={onReset}
      >
        {_map(fields, (field, key) => {
          const name = (field && field.name) || "";
          const value = _get(props, `state.${name}.value`);
          const isValid = _get(props, `state.${name}.isValid`);
          const messageError = _get(props, `state.${name}.messageError`);
          return (
            <InputForm
              key={key}
              {...field}
              value={value}
              isValid={isValid}
              messageError={messageError}
              onChange={onChange}
            />
          );
        })}
        <div className="body__button">
          <CustomButton type="submit" text={buttonText} />
          <CustomButton type="reset" text="Limpiar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
