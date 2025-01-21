import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    const authCookie = req.cookies.get("auth")?.value;

    if (url.pathname.startsWith("/admin")) {
        if (!authCookie) {
            url.pathname = "/auth/login";
            return NextResponse.redirect(url);
        }
    }

    if (url.pathname.startsWith("/auth")) {
        if (authCookie) {
            url.pathname = "/admin";
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/auth/:path*"],
};
