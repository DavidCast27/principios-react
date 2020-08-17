import React, { Component } from "react";
import { DEFAULT_STATE_SIGN_IN } from "../../common/constants/formsDefaultStates";
import { inputValidate } from "../../common/js/validator";
import { signIn } from "../../common/js/firebaseDatabase";
import Form from "../../components/Form";
import signInForm from "../../common/constants/signInForm.json";
import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE_SIGN_IN;
  }

  onChange = (e) => {
    const target = e.target;
    const name = (target && target.name) || "";
    const value = (target && target.value) || "";
    const validate = inputValidate(target);
    this.setState({ [name]: { value, ...validate } });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const self = this || {};
    const state = self.state;
    const email = state.email.value;
    const password = state.password.value;
    signIn(email, password)
      .then((data) => {
        console.log(data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("entro al error");
        console.log(err);
      });
  };

  onReset = () => {
    this.setState(DEFAULT_STATE_SIGN_IN);
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
