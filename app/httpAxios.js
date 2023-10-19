import axios from "axios";

// helps to use api with baseurl
export const httpAxios = axios.create({
  baseURL: "https://p-dqmu.vercel.app/",
});
