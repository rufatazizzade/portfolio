import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("admin-token")?.value;

  const url = req.nextUrl.clone();
  
  if (url.pathname === "/admin") {
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }
  
  // Protect all /admin routes except /admin/login
  if (url.pathname.startsWith("/admin") && !url.pathname.startsWith("/admin/login")) {
    if (!token) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    
    const verified = await verifyToken(token);
    
    if (!verified) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  // Protect /api/admin routes
  if (url.pathname.startsWith("/api/admin")) {
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const verified = await verifyToken(token);
    if (!verified) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
