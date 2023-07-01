interface Props {
  title: string;
  subtitle: string;
}
function TextBar({ title, subtitle }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}
export default TextBar;
