import React, { Component } from "react";
import Form from "../../components/Form";
import { createUser } from "../../common/js/firebaseDatabase";
import { DEFAULT_STATE_SIGN_UP } from "../../common/constants/formsDefaultStates";
import { inputValidate } from "../../common/js/validator";
import signUpForm from "../../common/constants/signUpForm.json";
import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE_SIGN_UP;
  }

  onChange = (e) => {
    const target = e.target;
    const name = (target && target.name) || "";
    const value = (target && target.value) || "";
    const validate = inputValidate(target);
    this.setState({ [name]: { value, ...validate } });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const self = this || {};
    const state = self.state;
    const username = state.username.value;
    const email = state.email.value;
    const password = state.password.value;
    await createUser(username,email,password)
      .then((data) => {
        console.log(data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("entro al error")
      console.log(err);
    });
  };

  onReset = () => {
    this.setState({
      username: "",
      password: "",
      email: "",
      passwordConfirmation: "",
    });
  };

  render() {
    return (
      <div className="signInPage">
        <Form
          fields={signUpForm}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
          state={this.state}
          buttonText="Registrar"
          title="Registrar de Usuarios"
          formName="sign up"
        />
      </div>
    );
  }
}

export default SignUp;
