import axios from "axios";

let myAxios = axios.create({
  baseURL: '//localhost:8080',
  withCredentials: true,
});

export { myAxios as axios };