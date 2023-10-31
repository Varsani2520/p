import axios from "axios";
import {useSelector} from 'react-redux'
// helps to use api with baseurl
export const httpAxios = axios.create({
  baseURL: "http://localhost:3000",
});

export const userVerified=()=>{
  const user = useSelector((state) => state.user.auth);
  return user;
}