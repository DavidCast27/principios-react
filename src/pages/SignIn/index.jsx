import React, { Component } from "react";
import Form from "../../components/Form";
import signInForm from "../../common/constants/signInForm.json";
import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (e) => {
    const target = e.target;
    const name = (target && target.name) || "";
    const value = (target && target.value) || "";
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  };

  onReset = () => {
    this.setState({
        username: "",
        password: "",
      });
  };

  render() {
    return (
      <div className="signInPage">
        <Form
          fields={signInForm}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
          state={this.state}
          buttonText="Ingresar"
          title="Ingreso de Usuarios"
          formName="sign in"
        />
      </div>
    );
  }
}

export default SignIn;
