import react from "react";
import * as style from "./button.scss";
interface Props {
  text: string;
  pen?: "white" | "black";
  background?: "green" | "red" | "pink";
  onClick: () => void;
}

export enum Color {
  green = "green",
  red = "red",
  pink = "pink",
}

const Button = ({ text, pen, background, onClick }: Props) => {
  return (
    <button
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
