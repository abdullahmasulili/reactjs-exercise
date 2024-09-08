import React, { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [isStart, setIsStart] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);

  const timer = useRef();

  function handleStartTimer() {
    setTimeout(() => {
      setIsTimeout(true);
    }, targetTime * 1000);

    setIsStart(true);
  }

  function handleStopTimer() {
    clearTimeout(timer.current);
    setIsStart(false);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {`${targetTime} second${targetTime > 1 ? "s" : ""}`}
      </p>
      <p>
        <button onClick={isStart ? handleStopTimer : handleStartTimer}>
          {isStart ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={isStart ? "acitve" : undefined}>
        {isStart ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
