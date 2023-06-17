import Bar from "../../uiKit/bar/bar";
import colors from "../../assets/_colors.module.scss";
import Menu from "../menu/menu";
function Header() {
  return (
    <>
      <Bar
        link="https://google.com"
        text="An Awesome Gift Always! Get Gift Coupons Now"
        backgroundColor={colors.red}
      />
      <Menu />
    </>
  );
}
export default Header;
