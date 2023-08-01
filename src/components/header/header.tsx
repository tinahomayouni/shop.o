import Bar from "../../uiKit/bar/bar";
import colors from "../../assets/_colors.module.scss";
import Menu from "../menu/menu";
import Logo from "../logo/logo";
import styles from "./style.module.scss";
function Header() {
  return (
    <>
      <Bar
        link="https://google.com"
        text="An Awesome Gift Always! Get Gift Coupons Now"
        backgroundColor={colors.red}
      />
      <div className={styles.navbar}>
        <Menu />
        <Logo />
      </div>
    </>
  );
}
export default Header;
