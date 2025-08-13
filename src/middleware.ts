import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const theme = request.cookies.get("theme")?.value ?? "dark";

  const response = NextResponse.next();
  response.headers.set("x-theme", theme);
  return response;
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
