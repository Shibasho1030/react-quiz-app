import Options from "./Options";

function Question({ question, handleNewAnswer, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        handleNewAnswer={handleNewAnswer}
        answer={answer}
      />
    </div>
  );
}

export default Question;
