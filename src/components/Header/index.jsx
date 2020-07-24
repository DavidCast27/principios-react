import React, { Component } from "react";
import "./Header.scss";
import logo from "../../logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props.message);
    this.state = {
      user: "castri",
    };
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo logo">
          <img src={logo} alt="logo" className="logo__img" />
        </div>
        <nav className="header__navbar navbar">
          <ul className="navbar__options options">
            <li className="options__info"> Trabaja con nojostros</li>
            <li className="options__info"> Nuestros productos</li>
            <li className="options__info"> Productos</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
