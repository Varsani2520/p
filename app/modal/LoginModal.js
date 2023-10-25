import mongoose, { Schema } from "mongoose";

const LoginModal = Schema({
  email: String,
  password: String,
});

//modaal
let login;
if (login) {
  login = mongoose.model("loginss");
} else {
  mongoose.model("loginss", LoginModal);
}
// export const login = mongoose.model("login") || mongoose.model("login",loginModel)
export { login };
export default LoginModal;
