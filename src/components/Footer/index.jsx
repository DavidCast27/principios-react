import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/4fk.jpg";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo logo">
        <img src={logo} alt="logo" className="logo__img" />
      </div>
      <nav className="footer__navbar navbar">
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
      <p className="footer__copyright">© All rights reserved to 4FK Team</p>
    </footer>
  );
}

export default Footer;
