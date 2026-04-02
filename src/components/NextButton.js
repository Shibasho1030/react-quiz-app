function NextButton({
  handleNext,
  answer,
  numQuestions,
  index,
  handleFinish,
  handleReStart,
  status,
}) {
  const isNextQuestion = numQuestions > index + 1;

  if (answer === null && status !== "finished") return null;
  return (
    <button
      className="btn btn-ui"
      onClick={
        status === "finished"
          ? handleReStart
          : isNextQuestion
            ? handleNext
            : handleFinish
      }
    >
      {isNextQuestion && " Next"}
      {!isNextQuestion && status !== "finished" && "Finished"}
      {status === "finished" && "Restart Quiz"}
    </button>
  );
}

export default NextButton;
