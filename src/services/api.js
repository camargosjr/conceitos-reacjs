import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.10.227:3333",
});

export default api;
