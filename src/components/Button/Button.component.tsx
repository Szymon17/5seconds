import { ButtonHTMLAttributes, FC } from "react";
import "./Button.styles.css";

export enum BUTTON_CLASSES {
  base = "button_base",
  blue = "button_blue",
}

type buttonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: BUTTON_CLASSES;
};

const Button: FC<buttonType> = ({ buttonType = BUTTON_CLASSES.base, children, ...otherProps }) => {
  return (
    <button className={`button ${buttonType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
