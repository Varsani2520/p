import axios from "axios";

// helps to use api with baseurl
export const httpAxios = axios.create({
  baseURL: "http://localhost:3000",
});
