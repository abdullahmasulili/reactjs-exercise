import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ answers }) {
  let result = {
    correct: 0,
    wrong: 0,
    skipped: 0,
  };

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === QUESTIONS[i].answers[0]) {
      result.correct++;
      continue;
    } else if (answers[i] === null) {
      result.skipped++;
      continue;
    } else if (answers[i] !== QUESTIONS[i].answers[0]) {
      result.wrong++;
      continue;
    }
  }

  console.log(result);

  const correctPercentage =
    Math.round((result?.correct / QUESTIONS.length) * 100) || 0;
  const wrongPercentage =
    Math.round((result?.wrong / QUESTIONS.length) * 100) || 0;
  const skippedPercentage =
    Math.round((result?.skipped / QUESTIONS.length) * 100) || 0;

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
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className="user-answer">{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
