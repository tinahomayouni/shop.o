import { ReactNode } from "react";
import styles from "./style.module.scss";
import defaultImage from "./default-image.jpeg";
interface Props {
  children: ReactNode;
  boxShadow: "yes" | "no";
  text: string;
  image?: string;
  column: number;
}
function Card({ children, boxShadow, text, image, column }: Props) {
  return (
    <div
      style={{ width: `${column}0%` }}
      className={`${styles.card} ${
        boxShadow === "yes" ? styles.addBoxShadow : ""
      }`}
    >
      {children}
      <img src={image !== "" ? image : defaultImage} />
      <h3>{text}</h3>
    </div>
  );
}
export default Card;
