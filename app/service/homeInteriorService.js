import { httpAxios } from "../httpAxios";

export async function serviceProvider(id) {
  const home = await httpAxios
    .post("api/services", { id: Number(id) })
    .then((response) => response.data);
  return home;
}
