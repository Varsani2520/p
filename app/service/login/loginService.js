import { httpAxios } from "@/app/httpAxios";


// getting userdata and ssend request to this particular api
export async function service(userData) {
  const result = await httpAxios
    .post("/api/login", userData)
    .then((response) => response.data);
  return result;
}
