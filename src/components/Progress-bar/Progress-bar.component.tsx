import "./Progress-bar.styles.css";
import { FC } from "react";

type progressBarTypes = { isOn: boolean };

const ProgressBar: FC<progressBarTypes> = ({ isOn }) => {
  return <div className="progress-bar">{isOn && <div className="progress-bar__line"></div>}</div>;
};

export default ProgressBar;
