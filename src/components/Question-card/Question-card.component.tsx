import "./Question-card.styles.css";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const QuestionCard: FC<{ question: string | null }> = ({ question }) => {
  return (
    <div className="question-card">
      <span className="question-card__text">
        {typeof question === "string" ? question : <FontAwesomeIcon className="question_mark" icon={faQuestion} />}
      </span>
    </div>
  );
};

export default QuestionCard;
