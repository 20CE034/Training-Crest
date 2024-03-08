import { forwardRef } from "react";

export default forwardRef(function ResultModal({ result, targetTime }, ref) {
  console.log(result);
  return (
    <div ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        Timer was stopped at <strong> seconds.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </div>
  );
});
