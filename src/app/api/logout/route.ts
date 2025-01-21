import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
    const authCookie = serialize("auth", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: -1, // Remove cookie
    });

    const userCookie = serialize("user", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: -1, // Remove cookie
    });

    const headers = new Headers();
    headers.append("Set-Cookie", authCookie);
    headers.append("Set-Cookie", userCookie);

    return NextResponse.json(
        { message: "Logout successful" },
        { headers: headers, status: 200 },
    );
}
