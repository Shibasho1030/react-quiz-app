import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondRemaining: null,
};

const SECS_PER_QUESTION = 10;

export function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        questions: action.payload,
        secondRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      const addPoints =
        action.payload === question.correctOption ? question.points : 0;
      return {
        ...state,
        answer: action.payload,
        points: state.points + addPoints,
      };
    case "nextQuestion":
      const questionsLength = state.questions.length;
      const isNextQuestion = questionsLength > state.index + 1;
      return {
        ...state,
        index: isNextQuestion ? state.index + 1 : state.index,
        answer: isNextQuestion ? null : state.answer,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "reStart":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action unknown");
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const question = questions[index];

  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0,
  );

  function handleStart() {
    const shuffleQuestions = questions.toSorted(() => Math.random() - 0.5);
    dispatch({ type: "start", payload: shuffleQuestions });
  }

  function handleNewAnswer(i) {
    dispatch({
      type: "newAnswer",
      payload: i,
      // payload2: isCorrect ? questions[index].points : 0,
    });
  }

  function handleNext() {
    dispatch({ type: "nextQuestion" });
  }

  function handleFinish() {
    dispatch({ type: "finished" });
  }

  function handleReStart() {
    handleStart();
    dispatch({ type: "reStart" });
  }

  function handleTick() {
    dispatch({ type: "tick" });
  }

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        question,
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondRemaining,
        numQuestions,
        maxPoints,
        handleStart,
        handleNewAnswer,
        handleTick,
        handleReStart,
        handleFinish,
        handleNext,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error("Context API is error");
  return context;
}

export { QuizProvider, useQuiz };
