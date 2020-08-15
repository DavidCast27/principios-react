import React from "react";
import "./CustomButton.scss";

function CustomButton(props) {
  const type = (props && props.type) || "";
  const text = (props && props.text) || "";
  const onClick = (props && props.onClick) || null;
  
  if (type && text) {
    return (
      <button className={`customButton customButton--${type}`} type={type} onClick={onClick} >
        {text}
      </button>
    );
  }
  return null;
}

export default CustomButton;
