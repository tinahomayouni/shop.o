import styles from "./button.module.scss";
interface Props {
  text: string;
  pen?: "white" | "black";
  background?: Color;
  onClick: () => void;
}

export enum Color {
  green = "#B7C18F",
  red = "#d7a6ac",
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
      }}
    >
      {text}
    </button>
  );
};

export default Button;
