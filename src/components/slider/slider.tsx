import Button from "../../uiKit/button/button";
import styles from "./style.module.scss";
import colors from "../../assets/_colors.module.scss";
import React, { ReactNode, useMemo, useState } from "react";

// enum AnimationType {
//   SMOOTH,
//   WIGGLY,
//   REVERSE,
//   NONE,
// }
const AnimationType = {
  SMOOTH: 0,
  WIGGLY: 1,
  REVERSE: 2,
  NONE: 3,
} as const;
type AnimationType = (typeof AnimationType)[keyof typeof AnimationType];

interface Props {
  children: ReactNode[];
  button: boolean;
  dot: boolean;
  animation: AnimationType | undefined;
}
function Slider({ children, button, dot, animation }: Props) {
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

  const animationFunction = useMemo((): string => {
    switch (animation) {
      case AnimationType.SMOOTH:
        return "ease-in-out 2s";
      case AnimationType.WIGGLY:
        return "ease 2s";
      case AnimationType.REVERSE:
        return "ease ease";
      case AnimationType.NONE:
      case undefined:
        return "";
      default:
        return animation satisfies never;
    }
  }, []);

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
