import { myData } from "../App";

const movieAPI = "https://reqres.in/api/users?page=2";

export const loginFunction = async () => {
  const response = await fetch(movieAPI);
  const movies = await response.json();
  //return movies; (1)
  //localStorage.setItem("movies", JSON.stringify(movies)); (2)
};
