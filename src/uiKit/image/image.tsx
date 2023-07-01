import styles from "./style.module.scss";
interface Props {
  src?: string;
  round: boolean;
  width: string;
  height: string;
  style: any;
}

function Image({ src, round, width, height, style }: Props) {
  return (
    <div style={{ ...style, width: width, height: height, overflow: "hidden" }}>
      <img
        className={`${styles.image} ${round ? styles.round : ""}`}
        src={src}
      />
    </div>
  );
}

export default Image;
