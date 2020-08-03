import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/4fk.jpg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo logo">
        <img src={logo} alt="logo" className="logo__img" />
      </div>
      <nav className="header__navbar navbar">
        <ul className="navbar__options options">
          <li className="options__info info">
            <Link className="info__link" to="/">
              Home
            </Link>
          </li>
          <li className="options__info info">
            <Link className="info__link" to="/products">
              Productos
            </Link>
          </li>
          <li className="options__info info">
            <Link className="info__link" to="/stores">
              Tiendas
            </Link>
          </li>
          <li className="options__info info">
            <Link className="info__link" to="/sign-in">
              Iniciar Sesion
            </Link>
          </li>
          <li className="options__info info">
            <Link className="info__link" to="/sign-up">
              Registrate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
