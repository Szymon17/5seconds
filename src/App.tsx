import "./App.css";
import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "./context/QuestionsContext";
import QUESTIONS_DATA from "./assets/questions.json";
import QuestionCard from "./components/Question-card/Question-card.component";
import Button, { BUTTON_CLASSES } from "./components/Button/Button.component";
import ProgressBar from "./components/Progress-bar/Progress-bar.component";

function App() {
  const { setQuestions, questions } = useContext(QuestionsContext);
  const [question, setQuestion] = useState<string | null>(null);
  const [countingState, setCountingState] = useState(false);
  const [questionInCounting, setQuestionInCounting] = useState("");

  useEffect(() => {
    if (QUESTIONS_DATA) setQuestions(QUESTIONS_DATA.questions);
  }, []);

  useEffect(() => {
    if (question === questionInCounting) setQuestion(null);
  }, [questionInCounting]);

  const getRandomQuestion = () => {
    const saveGuard = 100;
    let randomQuestion = "";
    let i = 0;

    do {
      const randomIndex = Math.floor(Math.random() * questions.length);
      randomQuestion = questions[randomIndex];
      i++;
    } while (randomQuestion === question || i > saveGuard);

    return randomQuestion;
  };

  const rollQuestion = () => {
    const randomQuestion = getRandomQuestion();
    setQuestion(randomQuestion);
    setCountingState(false);
  };

  const startCounting = () => {
    if (question !== null && !countingState) {
      setCountingState(false);

      setTimeout(() => setCountingState(true), 10);

      setTimeout(() => {
        setQuestionInCounting(question);
      }, 5000);
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <QuestionCard question={question} />
        <ProgressBar isOn={countingState} />
        <div className="button_container">
          <Button buttonType={BUTTON_CLASSES.blue} onClick={rollQuestion}>
            Losuj pytanie
          </Button>
          <Button onClick={startCounting}>Start</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
