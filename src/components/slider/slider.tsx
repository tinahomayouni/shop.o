import Button from "../../uiKit/button/button";
import styles from "./style.module.scss";
import colors from "../../assets/_colors.module.scss";
import React, { ReactNode, useState } from "react";
interface Props {
  children: ReactNode[];
  button: boolean;
  dot: boolean;
}
function Slider({ children, button, dot }: Props) {
  const [initial, setInitial] = useState(0);

  const next = () => {
    setInitial((prevInitial) => {
      if (prevInitial + 1 >= children.length) {
        return 0;
      } else {
        return prevInitial + 1;
      }
    });
  };
  const prev = () => {};

  console.log(children, "children");
  return (
    <div className={styles.sliderHolder}>
      <div className={styles.slider}>
        {children?.map((child: any, index) =>
          React.cloneElement(child, {
            style: {
              ...child.props.style,
              transform: `translateX(${index * 100 - initial * 200}%)`,
            },
          })
        )}
      </div>
      {dot && (
        <div className={styles.dot}>
          {children?.map((_, index) => (
            <div key={index}>dot</div>
          ))}
        </div>
      )}
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
            onClick={next}
          />
        </div>
      )}
    </div>
  );
}
export default Slider;
