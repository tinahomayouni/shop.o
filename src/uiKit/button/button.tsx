import react from "react";
import styles from "./button.module.scss";
interface Props {
  text: string;
  pen?: "white" | "black";
  background?: Color;
  onClick: () => void;
  // className: any;
}

export enum Color {
  green = "green",
  red = "red",
  pink = "pink",
}

const Button = ({ text, pen, background, onClick }: Props) => {
  return (
    <button
      className={
        background === Color.green ? styles.buttonAdd : styles.buttonRemove
      }
      onClick={onClick}
      style={{
        color: pen,
        backgroundColor: background,
        padding: 20,
        border: 0,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
