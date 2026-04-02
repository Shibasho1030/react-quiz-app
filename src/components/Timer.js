import { useEffect } from "react";

function Timer({ handleFinish, handleTick, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        handleTick();
      }, 1000);
      return function () {
        clearInterval(id);
      };
    },
    [handleFinish, handleTick, secondRemaining],
  );

  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}
    </div>
  );
}

export default Timer;
