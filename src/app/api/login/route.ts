import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        const res = await fetch(
            "https://airbnbnew.cybersoft.edu.vn/api/auth/signin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    tokenCybersoft:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjIxLzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0Nzc4NTYwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3OTMzMjAwfQ.HdSOdENfWNAr5C4CemzCCFNsB1DIvQDRBpEJSsOdpA8",
                },
                body: JSON.stringify({ email, password }),
            },
        );

        const data = await res.json();

        if (!res.ok) {
            const { content, statusCode } = data;

            if (statusCode === 400) {
                return NextResponse.json({ message: content }, { status: 400 });
            }
        }

        if (data.statusCode === 200) {
            const token = data.content.token;

            const authCookie = serialize("auth", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                path: "/",
                maxAge: 60 * 60, // 1 hour
            });

            const userCookie = serialize(
                "user",
                JSON.stringify(data.content.user),
                {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    path: "/",
                },
            );

            const headers = new Headers();
            headers.append("Set-Cookie", authCookie);
            headers.append("Set-Cookie", userCookie);

            return NextResponse.json(
                {
                    user: data.content.user,
                    message: "Đăng nhập thành công",
                },
                {
                    headers: headers,
                },
            );
        }
    } catch (error) {
        return NextResponse.json(
            {
                message:
                    "Đã xảy ra lỗi khi đăng nhập, xin vui lòng thử lại sau!",
            },
            { status: 401 },
        );
    }
}
