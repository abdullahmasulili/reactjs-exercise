import React, { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(answer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  }

  return (
    <section id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
