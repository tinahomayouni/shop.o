import React from "react";

interface Props {
  pen?: string;
  type: string;
  text: string | number;
}
function Text({ pen, type, text }: Props) {
  return <>{React.createElement(type, { style: { color: pen } }, text)}</>;
}
export default Text;
