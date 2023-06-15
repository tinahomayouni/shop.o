import React from "react";
import styles from "./style.module.scss";
interface Props {
  src: string;
  round: boolean;
}

function Image({ src, round }: Props) {
  return <img className={round ? styles.round : ""} src={src} />;
}

export default Image;
