import React, { Component } from "react";
import Form from "../../components/Form";
import signUpForm from "../../common/constants/signUpForm.json";
import "./SignUp.scss";
import { createUser } from "../../common/js/firebaseDatabase";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      passwordConfirmation: "",
    };
  }

  onChange = (e) => {
    const target = e.target;
    const name = (target && target.name) || "";
    const value = (target && target.value) || "";
    this.setState({ [name]: value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const self = this || {};
    const state = self.state;
    await createUser({ ...state }).then(() => this.props.history.push("/"));
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
