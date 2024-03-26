import { useState, useEffect } from "react";

export default function QuestionTimer({ onTimeout, timeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  //   timeout
  useEffect(() => {
    setTimeout(onTimeout, timeout);
    console.log(setTimeout(onTimeout, timeout));
  }, [onTimeout, timeout]);

  //   intervalic re-rendering of component
  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
