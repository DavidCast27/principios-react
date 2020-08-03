import React from "react";

import "./Card.scss";

function Card(props) {
  const title = (props && props.title) || "";
  const content = (props && props.content) || "";
  const picture = (props && props.picture) || "";
  return (
    <div className="card">
      {title && <h1 className="card__title">{title}</h1>}
      {content && <p className="card__content"> {content}</p>}
      {picture && <img src={picture} alt="logo" className="card__picture" />}
    </div>
  );
}

export default Card;
