import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value; // Assume the token is stored in a cookie
  const protectedPaths = ["/dashboard"];

  // Redirect based on the token status and the current path
  if (request.nextUrl.pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Check if the pathname starts with any of the protected paths
  if (
    protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path)) &&
    !token
  ) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login if token is not present
  }

  return NextResponse.next(); // Allow the request if the user is authenticated or the path is not protected
}
