import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [currentTime, setCurrentTime] = useState(targetTime * 1000);
  const isTimerActive = currentTime > 0 && currentTime < targetTime * 1000;

  const timer = useRef();
  const dialog = useRef();

  if (currentTime <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }

  function handleStartTimer() {
    timer.current = setInterval(() => {
      setCurrentTime((prevCurrentTime) => prevCurrentTime - 10);
    }, 10);
  }

  function handleStopTimer() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleResetTimer() {
    setCurrentTime(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        currentTime={currentTime}
        onReset={handleResetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {`${targetTime} second${targetTime > 1 ? "s" : ""}`}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStopTimer : handleStartTimer}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "acitve" : undefined}>
          {isTimerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
