import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Vérifier si l'utilisateur accède aux routes admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Exclure la page de login
    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next()
    }

    // Vérifier le token d'authentification
    const token = request.cookies.get("admin-token")

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}
