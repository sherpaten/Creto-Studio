import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (hostname === "www.cretostudio.com") {
    const url = request.nextUrl.clone();
    url.hostname = "cretostudio.com";
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
