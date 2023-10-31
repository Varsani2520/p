import { NextResponse } from "next/server.js";
import { userVerified } from "./app/httpAxios.js";
 // Replace 'your-routing-library' with the actual library you are using for routing.

export async function middleware(request) {
  console.log("middleware executed");

  if (!userVerified) {
    console.log('user fail');
    // Perform a redirection if the user is not verified
    return NextResponse.redirect(new URL('/login', request.url)); // Redirect to the login page, change this URL as needed.
  } else {
    console.log(userVerified);
    // Continue processing if the user is verified
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/login", "/signup", "/api/:path*"],
};
