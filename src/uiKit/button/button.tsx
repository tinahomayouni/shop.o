import react from "react";
import * as style from "./button.scss";
interface Props {
  text: string;
  color?: "white" | "black";
  background?: "Green" | "Red";
  onClick: () => void;
}

enum Color {
  green = "green",
  red = "red",
  pink = "pink",
}

const Button = ({ text, color, background, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        color: color,
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
