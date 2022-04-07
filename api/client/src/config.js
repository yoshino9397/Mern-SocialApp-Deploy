import axios from "axios";

const BASE_URL = "https://yoshino-social.herokuapp.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});