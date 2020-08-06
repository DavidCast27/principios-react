import React from "react";
import _map from "lodash/map";
import InputForm from "../InputForm";
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
        {
            _map(fields, (field, key) => {
                const name = (field && field.name) || "";
                return (
                    <InputForm key={key} { ...field } value={state[name]} onChange={onChange} />
                );
            })
        }
        <div className="body__button button">
          <button className="button__submit" type="submit">
            {buttonText}
          </button>
          <button className="button__clear" type="reset">
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

// //cuando la clase se construye y se monta el componente
// //Todavia no se a renderizado
// //Administrar peticiones AJAX
// componentDidMount() {}

// //Cuando cambian los props
// componentWillReceiveProps(nextProps) {}

// //Compara las props o los estados para ver los cambios para re-renderizar
// //si retorna true re-renderiza en caso tal no lo hace
// shouldComponentUpdate(nextProps, nextState) {}

// //Se ejecuta antes de actualice
// componentWillUpdate(nextProps, nextState) {}

// //Se ejecuta luego de re-renderizarce
// componentDidUpdate(prevProps, prevState) {}

// //Cuando un componente va a ser desmontado
// componentWillUnmount() {}
