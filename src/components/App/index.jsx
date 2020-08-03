import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import Products from "../../pages/Products";
import Stores from "../../pages/Stores";
import NotFoud from "../../pages/NotFound";
import Footer from "../Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/stores" component={Stores} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route component={NotFoud} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
