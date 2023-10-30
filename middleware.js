

export  function middleware(request) {
  // You can use await here if needed
  console.log("middleware executed");
  //   return NextResponse.next();
}

export const config = {
  matcher: "/about_us",
};
