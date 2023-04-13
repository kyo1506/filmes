import axios from "axios";

//viniciusfreire.com/3/movie/550?api_key=b7cb98b8ebd99847d81bcb954007e32a
//b7cb98b8ebd99847d81bcb954007e32a

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
