import axios from "axios";
import Cookies from "js-cookie";

//todo удалить этот файл
export const $axios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: Cookies.get("token") ? `Bearer ${Cookies.get("token")}` : "",
  },
});
