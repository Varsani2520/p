import mongoose, { Schema } from "mongoose";

const loginModal = Schema({
  email: String,
  password: String,
});

//modaal
let login;
if (login) {
  login = mongoose.model("loginss");
} else {
  mongoose.model("loginss", loginModal);
}
// export const login = mongoose.model("login") || mongoose.model("login",loginModel)
export { login };
export default loginModal;
