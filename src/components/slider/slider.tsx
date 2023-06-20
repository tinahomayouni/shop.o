import Button from "../../uiKit/button/button";
import styles from "./style.module.scss";
import colors from "../../assets/_colors.module.scss";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  button: boolean;
  dot: boolean;
}
function Slider({ children, button, dot }: Props) {
  const next = () => {};
  const prev = () => {};
  return (
    <div className={styles.sliderHolder}>
      <div className={styles.slider}>{children}</div>
      {dot && <div className={styles.dot}></div>}
      {button && (
        <div className={styles.buttonHolder}>
          <Button
            text="<"
            pen="white"
            background={colors.purple}
            onClick={() => alert("prev")}
          />
          <Button
            text=">"
            pen="white"
            background={colors.purple}
            onClick={() => alert("next")}
          />
        </div>
      )}
    </div>
  );
}
export default Slider;
