import React, { Component } from "react";
import Form from "../../components/Form";
import signUpForm from "../../common/constants/signUpForm.json";
import "./SignUp.scss";

class SignUp extends Component {
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
      <div className="signIn">
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
