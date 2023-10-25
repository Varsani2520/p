import { NextResponse } from "next/server";
import SignUpModal from "../../modal/SignUpModal";
import { database } from "@/app/database/db";
database();
export async function POST(request) {
  const { Name, Email, password, phone } = await request.json();
  try {
    const response = new SignUpModal({
      Name: Name,
      Email: Email,
      password: password,
      phone: phone,
    });
    const result = await response.save();
    console.log(result);
    console.log("user register", response);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    console.log("catch");
  }

  return NextResponse.json(response);
}
