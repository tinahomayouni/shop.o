import Image from "../../uiKit/image/image";
import logo from "../../assets/logo.png";
function Logo() {
  return (
    <>
      <Image width="100px" height="auto" round={false} src={logo} />
    </>
  );
}
export default Logo;
