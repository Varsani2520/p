import { httpAxios } from "@/app/httpAxios";


export async function ContactAddressService() {
  const swiper = await httpAxios
    .post("api/ContactAddress")
    .then((response) => response.data);
  return swiper;
}
