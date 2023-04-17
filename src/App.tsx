import "./App.css";
import { useContext, useEffect, useState } from "react";
import QuestionCard from "./components/question-card.component";
import QUESTIONS_DATA from "./assets/questions.json";
import { QuestionsContext } from "./context/QuestionsContext";

function App() {
  const { setQuestions, questions } = useContext(QuestionsContext);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (QUESTIONS_DATA) setQuestions(QUESTIONS_DATA.questions);
  }, []);

  const getRandomQuestion = () => {
    const saveGuard = 100;
    let randomQuestion = "";
    let i = 0;

    do {
      const randomIndex = Math.floor(Math.random() * questions.length);
      randomQuestion = questions[randomIndex];
      i++;
    } while (randomQuestion === question || i > saveGuard);

    setQuestion(randomQuestion);
    console.log(randomQuestion);
  };

  return (
    <div className="App">
      <div className="app-container">
        <QuestionCard />
        <button onClick={getRandomQuestion}></button>
      </div>
    </div>
  );
}

export default App;
