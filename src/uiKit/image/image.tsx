import React from "react";

interface Props {
  src: string;
}

function Image({ src }: Props) {
  return <img src={src} />;
}

export default Image;
