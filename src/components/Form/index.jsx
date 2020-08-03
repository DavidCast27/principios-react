import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Form.scss";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return <form>
      <
    </form>;
  }
}

index.propTypes = {};

export default index;

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
