import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.movie("/movie/top_rated/")
export default instance;
