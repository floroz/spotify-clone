import { NextRequest, NextResponse } from "next/server";
import { PROTECTED_ROUTES, ROUTES } from "../lib/constants/routes";

export async function middleware(req: NextRequest) {
  try {
    const isProtectedRoute = PROTECTED_ROUTES.some(
      (pathname) => req.nextUrl.pathname === pathname
    );

    if (!isProtectedRoute) {
      return NextResponse.next();
    }
    const token = req.cookies[process.env.COOKIE_TOKEN];

    if (!token) {
      throw new Error("");
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(ROUTES.login);
  }
}
