import { httpAxios } from "@/app/httpAxios";

export async function signupService(usersData) {
  const result = await httpAxios
    .post("api/signup", usersData)
    .then((response) => response.data);
  return result;
}
