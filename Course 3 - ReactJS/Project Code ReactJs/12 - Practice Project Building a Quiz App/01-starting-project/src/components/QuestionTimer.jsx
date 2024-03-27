import { useState, useEffect } from "react";

export default function QuestionTimer({ onTimeout, timeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  //   timeout
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    console.log(setTimeout(onTimeout, timeout));
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  //   intervalic re-rendering of component
  useEffect(() => {
    setInterval(() => {
      const interval = setRemainingTime(
        (prevRemainingTime) => prevRemainingTime - 100
      );
      return () => {
        clearTimeout(interval);
      };
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
