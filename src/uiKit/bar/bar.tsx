import { useEffect, useState } from "react";
import styles from "./style.module.scss";
interface Props {
  link: string;
  text: string;
  backgroundColor: string;
}
// initital left -200px
// each second add 20px to left
// till left is 200px more than 100%

function Bar({ link, text, backgroundColor }: Props) {
  const [position, setPosition] = useState(-1400);

  useEffect(() => {
    setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition === 1600) {
          return -1400;
        } else {
          return prevPosition + 1;
        }
      });
    }, 10);
  }, []);

  return (
    <>
      <div
        className={styles.textHolder}
        style={{ background: backgroundColor }}
      >
        <div className={styles.box}>
          <a
            style={{ position: "relative", left: position }}
            href={link}
            className={styles.a}
          >
            {text}
          </a>
        </div>
      </div>
    </>
  );
}
export default Bar;
