import React from "react";
import Answers from "./Answers";
import Timer from "./Timer";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <Timer timeout={5000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        items={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
