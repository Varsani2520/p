import { database } from "@/app/database/db";
import { login } from "@/app/modal/loginModal";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
database();
export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const response = new login({
      email: email,
      password: password,
      token: jwt.sign({ email: email }, "lkjjwtsignasdfghjkqwertyuiop"),
    });
    const result = await response.save();
    console.log(result)
    console.log("user login sucessfully", response);
    return NextResponse.json(result);
  } catch (error) {
    console.log("user login error", error);
  }

  return NextResponse.json("login success")
}
