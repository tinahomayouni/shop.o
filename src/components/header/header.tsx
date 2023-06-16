import Bar from "../../uiKit/bar/bar";
import colors from "../../assets/_colors.module.scss";
function Header() {
  return (
    <>
      <Bar
        link="https://google.com"
        text="An Awesome Gift Always! Get Gift Coupons Now"
        backgroundColor={colors.red}
      />
    </>
  );
}
export default Header;
