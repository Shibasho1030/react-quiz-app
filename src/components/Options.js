function Options({ question, handleNewAnswer, answer }) {
  const hasAnswered = answer !== null;
  const correctNum = question.correctOption;

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option  ${hasAnswered && (i === correctNum ? "correct" : "wrong")} ${answer === i ? "answer" : ""}`}
          disabled={hasAnswered}
          key={option}
          onClick={() => handleNewAnswer(i)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
