import React, { useRef } from "react";

export default function Answers({
  items,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswer = useRef();

  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...items];
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
