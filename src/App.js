import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Start from "./components/Start";

function App() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [question, setQuestion] = useState([]);

  function startGame() {
    setStart((prev) => !prev);
    setEnd(false);
    console.log("Effect");
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((response) => response.json())
      .then((data) => setQuestion(data.results));
  }
  function endGame() {
    setEnd(true);
  }
  return (
    <div className="container">
      <div className="block top"></div>
      {start ? (
        <Quiz
          list={question}
          isEnd={end}
          startGame={startGame}
          endGame={endGame}
        />
      ) : (
        <Start startGame={startGame} />
      )}
      <div className="block bottom"></div>
    </div>
  );
}

export default App;
