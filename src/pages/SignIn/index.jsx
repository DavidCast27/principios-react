import React, { Component } from "react";
import Form from "../../components/Form";
import signInForm from "../../common/constants/signInForm.json";
import "./SignIn.scss";
import { signIn } from "../../common/js/firebaseDatabase";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    await signIn({ ...state })
      .then((data) => {
        console.log(data);
        this.props.history.push("/");
      })
      .catch(console.log("credenciales malas"));
  };

  onReset = () => {
    this.setState({
      email: "",
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
