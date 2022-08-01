import React from "react";
import { useState } from "react";
import Button from "../ui/Button";

function Question(props) {
  const [answer, setAnswer] = useState(makeAnswer());
  function makeAnswer() {
    return props.answers
      .map((el, index) => {
        return {
          id: index,
          title: el.replaceAll("&quot;", "'").replaceAll("&#039;", "'"),
          correct: index === 3 ? true : false,
          isHeld: false,
        };
      })
      .sort(() => Math.random() - 0.5);
  }
  function toggleClick(id) {
    setAnswer((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, isHeld: !el.isHeld } : { ...el, isHeld: false }
      )
    );
  }
  const buttonList = answer.map((el) => (
    <Button
      id={el.id}
      key={el.id}
      isHeld={el.isHeld}
      isEnd={props.isEnd}
      toggleClick={toggleClick}
      title={el.title}
      correct={el.correct}
    />
  ));
  return (
    <div className="question">
      <h2 className="title">{props.title}</h2>
      <div className="answers">{buttonList}</div>
      <hr className="line" />
    </div>
  );
}

export default Question;
