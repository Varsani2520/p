import mongoose, { Schema } from "mongoose";

export const LoginModal = Schema({
  email: String,
  password: String,
});

//modaal
let login;
if(login){
  login = mongoose.model("loginss") 
}
else{
  mongoose.model("loginss",LoginModal)
}
// export const login = mongoose.model("login") || mongoose.model("login",LoginModal)
export default login
