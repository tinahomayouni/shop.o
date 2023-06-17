import styles from "./style.module.scss";
interface Props {
  src?: string;
  round: boolean;
  width: number;
}

function Image({ src, round, width }: Props) {
  return (
    <div style={{ width: `${width}px`, height: "auto" }}>
      <img
        className={`${styles.image} ${round ? styles.round : ""}`}
        src={src}
      />
    </div>
  );
}

export default Image;
