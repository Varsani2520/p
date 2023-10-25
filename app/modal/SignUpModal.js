import mongoose from "mongoose";

const SignUpSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  phone: Number,
  password: String,
});

let SignUpModel;

if (mongoose.models.signups) {
  SignUpModel = mongoose.model("signups");
} else {
  SignUpModel = mongoose.model("signups", SignUpSchema);
}

export default SignUpModel;
