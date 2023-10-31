import { database } from "@/app/database/db";
import jwt from "jsonwebtoken";
import LoginModal from "@/app/modal/LoginModal";
import {NextResponse} from 'next/server'
database();
export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const response = new LoginModal({
      email: email,
      password: password,
      token: jwt.sign({ email: email }, "lkjjwtsignasdfghjkqwertyuiop"),
    });
    const result = await response.save();
    console.log(result);
    console.log("user login sucessfully", response);
    return NextResponse.json(result);
  } catch (error) {
    console.log("user login error", error);
  }

  return NextResponse.json({
    login:'success'
  });
}
