import React from "react";

interface Props {
  pen?: string;
  type: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a";
  text: string | number;
}
function Text({ pen, type, text }: Props) {
  return <>{React.createElement(type, { style: { color: pen } }, text)}</>;
}
export default Text;
