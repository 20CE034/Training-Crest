import { useRef, useState } from "react";

import ResultModal from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  // the player loses if time gets expired
  const [timerExpired, settimerExpired] = useState(false);
  const [timerStarted, settimerStarted] = useState(false);

  function handleStart() {
    console.log("handleStart", targetTime * 1000);
    timer.current = setTimeout(() => {
      settimerExpired(true);
      dialog.current.showModel();
    }, targetTime * 1000);

    settimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running. . . " : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
