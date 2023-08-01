import styles from "./button.module.scss";
import colors from "../../assets/_colors.module.scss";
interface Props {
  text?: string;
  pen?: string;
  background?: string;
  onClick: () => void;
}
const Button = ({ text, pen, background, onClick }: Props) => {
  return (
    <button
      className={
        background === colors.green ? styles.buttonAdd : styles.buttonRemove
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
