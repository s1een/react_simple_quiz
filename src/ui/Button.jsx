import React from "react";

function Button(props) {
  let style = props.isHeld ? "check" : "";
  if (props.isEnd) {
    if (props.isHeld) {
      style = props.correct ? "correct" : "wrong";
    }
    if (props.correct) {
      style = "correct";
    }
  }
  return (
    <button
      onClick={() => props.toggleClick(props.id)}
      className={"btn-answer " + style}
      disabled={props.isEnd ? true : false}
    >
      {props.title}
    </button>
  );
}

export default Button;
