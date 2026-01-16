import { NextResponse } from "next/server";

export function middleware(request) {
  const authCookie = request.cookies.get("auth");

  const protectedRoutes =
    request.nextUrl.pathname.startsWith("/items") ||
    request.nextUrl.pathname.startsWith("/lists");

  if (protectedRoutes && !authCookie) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

// Ei ta Next.js ke bole dibe middleware ta kon routes e apply korte
export const config = {
  matcher: ["/items/:path*", "/lists/:path*"],
};
