import React from "react";
import Card from "../../components/Card";
import afkgiff from "../../assets/4FKGIF.gif";
import "./Home.scss"

function Home() {
  return (
    <div className="home">
      <Card
        title="Bienvenido"
        picture={afkgiff}
      />
    </div>
  );
}

export default Home;
