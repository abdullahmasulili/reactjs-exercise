import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ answers }) {
  const correctAnswers = answers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedAnswer = answers.filter((answer, index) => answer === null);

  const correctPercentage =
    Math.round((correctAnswers.length / QUESTIONS.length) * 100) || 0;
  const skippedPercentage =
    Math.round((skippedAnswer.length / QUESTIONS.length) * 100) || 0;
  const wrongPercentage = 100 - (correctPercentage + skippedPercentage);

  console.log(correctPercentage, skippedPercentage, wrongPercentage);

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz is Completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{`${correctPercentage}%`}</span>
          <span className="text">Are Correct</span>
        </p>
        <p>
          <span className="number">{`${wrongPercentage}%`}</span>
          <span className="text">Are Wrong</span>
        </p>
        <p>
          <span className="number">{`${skippedPercentage}%`}</span>
          <span className="text">Are Skipped</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
