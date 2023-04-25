import "./Question-card.styles.css";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const QuestionCard: FC<{ question: string | null }> = ({ question }) => {
  return (
    <div className="question-card">
      <motion.div
        key={typeof question}
        initial={{ rotateY: 140 }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 0.7 }}
        className="question-card__text"
      >
        {typeof question === "string" ? question : <FontAwesomeIcon className="question_mark" icon={faQuestion} />}
      </motion.div>
    </div>
  );
};

export default QuestionCard;
