import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const cookie = req.cookies.get("auth")?.value;

    if (!cookie) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    try {
        const userCookie = req.cookies.get("user")?.value;

        if (!userCookie) {
            console.log("a");
            return NextResponse.json({ authenticated: false }, { status: 401 });
        }

        const user = JSON.parse(userCookie);
        return NextResponse.json(
            { authenticated: true, user },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }
}
