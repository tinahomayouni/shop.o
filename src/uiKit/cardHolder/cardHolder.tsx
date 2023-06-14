import { ReactNode } from "react";
import styles from "./style.module.scss";
interface Props {
  children: ReactNode;
  column: Number; //number from 0 to 10
  counter?: number[];
  num?: number;
}
function CardHolder({ column, children }: Props) {
  return (
    <>
      <div className={styles.card} style={{ width: `${column}0%` }}>
        {children}
      </div>
    </>
  );
}

export default CardHolder;
