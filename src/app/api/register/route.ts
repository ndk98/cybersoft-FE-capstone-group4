import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email, password, phone, birthday, gender, role } =
        await req.json();

    const response = await fetch(
        "https://airbnbnew.cybersoft.edu.vn/api/auth/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                tokenCybersoft:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjIxLzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0Nzc4NTYwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3OTMzMjAwfQ.HdSOdENfWNAr5C4CemzCCFNsB1DIvQDRBpEJSsOdpA8",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
                birthday,
                gender,
                role,
            }),
        },
    );

    const data = await response.json();

    if (!response.ok) {
        const { content, statusCode } = data;

        if (statusCode === 400) {
            return NextResponse.json({ message: content }, { status: 400 });
        }
    }

    if (data.statusCode === 200) {
        return NextResponse.json(
            {
                user: data.content,
                message: "Đăng ký thành công.",
            },
            { status: 200 },
        );
    }

    return NextResponse.json(
        { message: "Đã gặp lỗi không xác định, xin vui lòng thử lại!" },
        { status: 401 },
    );
}
