import { httpAxios } from "../httpAxios";

export async function AboutService() {
  const swiper = await httpAxios
    .post("api/about_us")
    .then((response) => response.data);
  return swiper;
}
