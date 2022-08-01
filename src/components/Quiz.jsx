import React from "react";
import Question from "./Question";

function Quiz(props) {
  const questionList = props.list.map((el, index) => (
    <Question
      key={index}
      title={el.question.replaceAll("&quot;", "'").replaceAll("&#039;", "'")}
      isEnd={props.isEnd}
      answers={[...el.incorrect_answers, el.correct_answer]}
    />
  ));

  return (
    <div className="questions">
      {props.isEnd ? questionList : questionList}
      {!props.isEnd ? (
        <button onClick={props.endGame} className="btn">
          Check answers
        </button>
      ) : (
        <button onClick={props.startGame} className="btn">
          Restart Quiz
        </button>
      )}
    </div>
  );
}

export default Quiz;
