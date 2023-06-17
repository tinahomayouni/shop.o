import styles from "./style.module.scss";
interface Props {
  src?: string;
  round: boolean;
  width: string;
  height: string;
}

function Image({ src, round, width, height }: Props) {
  return (
    <div style={{ width: width, height: height, overflow: "hidden" }}>
      <img
        className={`${styles.image} ${round ? styles.round : ""}`}
        src={src}
      />
    </div>
  );
}

export default Image;
