import React from "react";
import _map from "lodash/map";
import InputForm from "../InputForm";
import CustomButton from "../CustomButton";
import "./Form.scss";

function Form(props) {
  const title = (props && props.title) || "";
  const formName = (props && props.formName) || "";
  const onSubmit = (props && props.onSubmit) || null;
  const buttonText = (props && props.buttonText) || "";
  const fields = (props && props.fields) || [];
  const onChange = (props && props.onChange) || null;
  const onReset = (props && props.onReset) || null;
  const state = (props && props.state) || {};

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
          return (
            <InputForm
              key={key}
              {...field}
              value={state[name]}
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
