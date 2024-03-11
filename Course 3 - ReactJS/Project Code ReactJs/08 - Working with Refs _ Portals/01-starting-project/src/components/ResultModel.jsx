import { forwardRef } from "react";

export default forwardRef(function ResultModal(
  { result, targetTime, onReset },
  ref
) {
  console.log(result);
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

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
