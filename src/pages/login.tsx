import Text from "../uiKit/text/text";
import { loginFunction } from "../fetchs/loginFetch";
import { myData } from "../App";

const movies = await loginFunction();
// console.log(movies, "sag");
// const sad: any = localStorage.getItem("movies");
function Login() {
  return (
    <div>
      <form>
        <div>
          <p>username:</p>
          <input />
        </div>
        <div>
          <p>password:</p>
          <input />
        </div>
        <button type="button"></button>
      </form>
    </div>
  );
}
export default Login;
